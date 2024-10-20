import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { addBook, searchByTitle, libraryCatalog } from './library'
import { searchByTitleSubstring, searchByAuthorSubstring, searchByTitleAndAuthor } from './library'
import { borrowBook, returnBook } from './library'
import { booksAvailableForLoan, booksOnLoan, overdueBooks } from './library'
import { readFile, writeFile } from 'fs/promises'
import { saveCatalog, loadCatalog } from './library'

vi.mock('fs/promises', async (importOriginal) => {
  const actual = await importOriginal()
  return {
    ...actual,
    writeFile: vi.fn(),
    readFile: vi.fn(),
  }
})

describe('Library System', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    libraryCatalog.splice(0)
  })

  it('should search for a book by title', () => {
    addBook('1984', 'George Orwell', 'novel')
    const result = searchByTitle('1984')
    expect(result).toEqual([
      { title: '1984', author: 'George Orwell', category: 'novel' }
    ])
  })
  it('should search for a book by title substring', () => {
    addBook('To Kill a Mockingbird', 'Harper Lee', 'novel')
    const result = searchByTitleSubstring('Mockingbird')
    expect(result).toEqual([
      { title: 'To Kill a Mockingbird', author: 'Harper Lee', category: 'novel' }
    ])
  })
  it('should search for a book by author substring', () => {
    addBook('To Kill a Mockingbird', 'Harper Lee', 'novel')
    const result = searchByAuthorSubstring('Lee')
    expect(result).toEqual([
      { title: 'To Kill a Mockingbird', author: 'Harper Lee', category: 'novel' }
    ])
  })
  it('should search for a book by both title and author', () => {
    addBook('1984', 'George Orwell', 'novel')
    const result = searchByTitleAndAuthor('1984', 'George Orwell')
    expect(result).toEqual([
      { title: '1984', author: 'George Orwell', category: 'novel' }
    ])
  })
  it('should borrow a book', () => {
    addBook('1984', 'George Orwell', 'novel')
    const result = borrowBook('1984', 'George Orwell')
    expect(result).toEqual({ title: '1984', author: 'George Orwell', category: 'novel', onLoan: expect.any(Date) })
    expect(libraryCatalog[0].onLoan).toBeInstanceOf(Date)
  })
  it('should return a borrowed book', () => {
    addBook('1984', 'George Orwell', 'novel')
    borrowBook('1984', 'George Orwell')
    const result = returnBook('1984', 'George Orwell')
    expect(result).toEqual({ title: '1984', author: 'George Orwell', category: 'novel' })
    expect(libraryCatalog[0].onLoan).toBeUndefined()
  })
  it('should report the number of books available for loan', () => {
    addBook('1984', 'George Orwell', 'novel')
    addBook('To Kill a Mockingbird', 'Harper Lee', 'novel')
    borrowBook('1984', 'George Orwell')
    const result = booksAvailableForLoan()
    expect(result).toBe(1)
  })
  it('should report the number of books on loan', () => {
    addBook('1984', 'George Orwell', 'novel')
    addBook('To Kill a Mockingbird', 'Harper Lee', 'novel')
    borrowBook('1984', 'George Orwell')
    const result = booksOnLoan()
    expect(result).toBe(1)
  })
  it('should report overdue books', () => {
    addBook('1984', 'George Orwell', 'novel')
    const book = borrowBook('1984', 'George Orwell')
    book.onLoan = new Date(Date.now() - 1000 * 60 * 60 * 24 * 15) // 15 days ago
    const result = overdueBooks()
    expect(result).toBe(1)
  })
  it('should save the library catalog to a file', async () => {
    addBook('1984', 'George Orwell', 'novel')
    writeFile.mockResolvedValue(undefined)
    await saveCatalog('catalog.json')
    expect(writeFile).toHaveBeenCalledWith('catalog.json', JSON.stringify(libraryCatalog, null, 2));
  })
  it('should load the library catalog from a file', async () => {
    const mockCatalog = [
      { title: '1984', author: 'George Orwell', category: 'novel', onLoan: new Date('2024-07-14T18:19:01.236Z') }
    ]
    readFile.mockResolvedValue(JSON.stringify(mockCatalog));

    await loadCatalog('catalog.json');
    expect(libraryCatalog).toEqual(mockCatalog);
  })
})

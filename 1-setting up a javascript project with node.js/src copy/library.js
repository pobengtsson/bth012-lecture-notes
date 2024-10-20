import fs from 'fs/promises'
import { type } from 'os'

let libraryCatalog = []

function addBook(title, author, category) {
  const newBook = { title, author, category }
  libraryCatalog.push(newBook)
}

function searchByTitle(title) {
  return libraryCatalog.filter(book => book.title === title)
}

function searchByTitleSubstring(substring) {
  return libraryCatalog.filter(book => book.title.includes(substring))
}

function searchByAuthorSubstring(substring) {
  return libraryCatalog.filter(book => book.author.includes(substring))
}

function searchByTitleAndAuthor(title, author) {
  return libraryCatalog.filter(book => book.title === title && book.author === author)
}

function borrowBook(title, author) {
  const book = libraryCatalog.find(book => book.title === title && book.author === author)
  if (book) {
    book.onLoan = new Date()
    return book
  }
  return null
}

function returnBook(title, author) {
  const book = libraryCatalog.find(book => book.title === title && book.author === author)
  if (book && book.onLoan) {
    delete book.onLoan
    return book
  }
  return null
}

function booksAvailableForLoan() {
  return libraryCatalog.filter(book => !book.onLoan).length
}

function booksOnLoan() {
  return libraryCatalog.filter(book => book.onLoan).length
}

function overdueBooks() {
  const today = new Date()
  const overdueLimit = 1000 * 60 * 60 * 24 * 14 // 14 days
  return libraryCatalog.filter(book => book.onLoan && (today - book.onLoan) > overdueLimit).length
}

async function saveCatalog(filename) {
  await fs.writeFile(filename, JSON.stringify(libraryCatalog, null, 2))
}

async function loadCatalog(filename) {
  const data = await fs.readFile(filename, 'utf8')
  libraryCatalog = JSON.parse(data, (key, value) => {
    return isDateProperty(key) && isDateString(value) ? new Date(value) : value
  })
}

function isDateProperty(key) {
  return key === 'onLoan'
}

function isDateString(value) {
  return typeof value === 'string' && !isNaN(Date.parse(value))
}

export {
  addBook,
  searchByTitle,
  searchByTitleSubstring,
  searchByAuthorSubstring,
  searchByTitleAndAuthor,
  borrowBook,
  returnBook,
  booksAvailableForLoan,
  booksOnLoan,
  overdueBooks,
  saveCatalog,
  loadCatalog,
  libraryCatalog
}

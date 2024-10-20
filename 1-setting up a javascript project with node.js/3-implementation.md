# Library System Implementation

## Introduction

In this project, we will develop a library system using basic ES6 JavaScript concepts, focusing on arrays, objects, modules, and functional programming with filter, map, and reduce. We will also use Node.js APIs for file operations and async/await for asynchronous programming.

## Features to Implement

We will implement the following operations in our library system:

1. **Add a book title**: Adds a new book to the library catalog.
2. **Search for a book by title**: Finds books that match a given title.
3. **Search for a book by title substring**: Finds books where the title contains a given substring.
4. **Search for a book by author substring**: Finds books where the author contains a given substring.
5. **Search for a book by both title and author**: Finds books that match both a given title and author.
6. **Borrow a book**: Marks a book as borrowed with the current date.
7. **Return a book**: Marks a book as returned.
8. **Report the number of books available for loan**: Counts books not currently on loan.
9. **Report the number of books on loan**: Counts books currently on loan.
10. **Report overdue books**: Counts books that are past their due date.
11. **Save the library catalog to a file**: Saves the current state of the library catalog to a file.
12. **Load the library catalog from a file**: Loads the library catalog from a file.

## Exclusions

We will not cover classes and inheritance in this lecture.

## Project Design

The library system will have a library catalog represented by an array of book objects. Each book object will have the properties `title`, `author`, and `category`. The categories can be 'novel', 'facts', or 'dictionary'.

The system will be a command-line application that continuously presents the user with the current library status and a menu of operations. The user can select an operation, which the system will execute, then return to the main menu.

### Library Catalog

```javascript
let libraryCatalog = []
```

### Book Object Structure

```javascript
{
  title: "Book Title",
  author: "Author Name",
  category: "novel", // or 'facts' or 'dictionary'
}
```

## Development Process

### Testing Framework

We will use Vitest for writing and running unit tests. The development will follow a Test-Driven Development (TDD) approach where we write tests first, then implement the necessary code to pass the tests.

### Step-by-Step Implementation

Each feature will be developed by first writing a test, then implementing just enough code to pass the test, and iterating this process.

## Example Implementation

### 1. Add a Book Title

#### Test for Adding a Book

```javascript
import { describe, it, expect } from 'vitest'
import { addBook, libraryCatalog } from './library'

describe('Library System', () => {
  it('should add a book to the library catalog', () => {
    addBook('1984', 'George Orwell', 'novel')
    expect(libraryCatalog).toEqual([
      { title: '1984', author: 'George Orwell', category: 'novel' }
    ])
  })
})
```

#### Implementation of `addBook`

```javascript
let libraryCatalog = [] // Array

function addBook(title, author, category) {
  const newBook = { title, author, category }
  libraryCatalog.push(newBook) // Array operations
}

export { addBook, libraryCatalog }
```

### 2. Search for a Book by Title

#### Test for Searching a Book by Title

```javascript
import { describe, it, expect } from 'vitest'
import { addBook, searchByTitle, libraryCatalog } from './library'

describe('Library System', () => {
  it('should search for a book by title', () => {
    addBook('1984', 'George Orwell', 'novel')
    const result = searchByTitle('1984')
    expect(result).toEqual([
      { title: '1984', author: 'George Orwell', category: 'novel' }
    ])
  })
})
```

#### Implementation of `searchByTitle`

```javascript
function searchByTitle(title) {
  return libraryCatalog.filter(book => book.title === title) // why the triple equal sign?
}

export { addBook, searchByTitle, libraryCatalog }
```
### 3. Search for a Book by Title Substring

#### Test for Searching a Book by Title Substring

```javascript
import { describe, it, expect } from 'vitest'
import { addBook, searchByTitleSubstring, libraryCatalog } from './library'

describe('Library System', () => {
  it('should search for a book by title substring', () => {
    addBook('To Kill a Mockingbird', 'Harper Lee', 'novel')
    const result = searchByTitleSubstring('Mockingbird')
    expect(result).toEqual([
      { title: 'To Kill a Mockingbird', author: 'Harper Lee', category: 'novel' }
    ])
  })
})
```

#### Implementation of `searchByTitleSubstring`

```javascript
function searchByTitleSubstring(substring) {
  return libraryCatalog.filter(book => book.title.includes(substring))
}

export { addBook, searchByTitleSubstring, libraryCatalog }
```

### 4. Search for a Book by Author Substring

#### Test for Searching a Book by Author Substring

```javascript
import { describe, it, expect } from 'vitest'
import { addBook, searchByAuthorSubstring, libraryCatalog } from './library'

describe('Library System', () => {
  it('should search for a book by author substring', () => {
    addBook('To Kill a Mockingbird', 'Harper Lee', 'novel')
    const result = searchByAuthorSubstring('Lee')
    expect(result).toEqual([
      { title: 'To Kill a Mockingbird', author: 'Harper Lee', category: 'novel' }
    ])
  })
})
```

#### Implementation of `searchByAuthorSubstring`

```javascript
function searchByAuthorSubstring(substring) {
  return libraryCatalog.filter(book => book.author.includes(substring))
}

export { addBook, searchByAuthorSubstring, libraryCatalog }
```

### 5. Search for a Book by Both Title and Author

#### Test for Searching a Book by Both Title and Author

```javascript
import { describe, it, expect } from 'vitest'
import { addBook, searchByTitleAndAuthor, libraryCatalog } from './library'

describe('Library System', () => {
  it('should search for a book by both title and author', () => {
    addBook('1984', 'George Orwell', 'novel')
    const result = searchByTitleAndAuthor('1984', 'George Orwell')
    expect(result).toEqual([
      { title: '1984', author: 'George Orwell', category: 'novel' }
    ])
  })
})
```

#### Implementation of `searchByTitleAndAuthor`

```javascript
function searchByTitleAndAuthor(title, author) {
  return libraryCatalog.filter(book => book.title === title && book.author === author)
}

export { addBook, searchByTitleAndAuthor, libraryCatalog }
```

### 6. Borrow a Book

#### Test for Borrowing a Book

```javascript
import { describe, it, expect } from 'vitest'
import { addBook, borrowBook, libraryCatalog } from './library'

describe('Library System', () => {
  it('should borrow a book', () => {
    addBook('1984', 'George Orwell', 'novel')
    const result = borrowBook('1984', 'George Orwell')
    expect(result).toEqual({ title: '1984', author: 'George Orwell', category: 'novel', onLoan: expect.any(Date) })
    expect(libraryCatalog[0].onLoan).toBeInstanceOf(Date)
  })
})
```

#### Implementation of `borrowBook`

```javascript
function borrowBook(title, author) {
  const book = libraryCatalog.find(book => book.title === title && book.author === author)
  if (book) {
    book.onLoan = new Date()
    return book
  }
  return null
}

export { addBook, borrowBook, libraryCatalog }
```

### 7. Return a Book

#### Test for Returning a Book

```javascript
import { describe, it, expect } from 'vitest'
import { addBook, borrowBook, returnBook, libraryCatalog } from './library'

describe('Library System', () => {
  it('should return a borrowed book', () => {
    addBook('1984', 'George Orwell', 'novel')
    borrowBook('1984', 'George Orwell')
    const result = returnBook('1984', 'George Orwell')
    expect(result).toEqual({ title: '1984', author: 'George Orwell', category: 'novel' })
    expect(libraryCatalog[0].onLoan).toBeUndefined()
  })
})
```

#### Implementation of `returnBook`

```javascript
function returnBook(title, author) {
  const book = libraryCatalog.find(book => book.title === title && book.author === author)
  if (book && book.onLoan) {
    delete book.onLoan
    return book
  }
  return null
}

export { addBook, borrowBook, returnBook, libraryCatalog }
```

### 8. Report the Number of Books Available for Loan

#### Test for Reporting the Number of Books Available for Loan

```javascript
import { describe, it, expect } from 'vitest'
import { addBook, borrowBook, booksAvailableForLoan, libraryCatalog } from './library'

describe('Library System', () => {
  it('should report the number of books available for loan', () => {
    addBook('1984', 'George Orwell', 'novel')
    addBook('To Kill a Mockingbird', 'Harper Lee', 'novel')
    borrowBook('1984', 'George Orwell')
    const result = booksAvailableForLoan()
    expect(result).toBe(1)
  })
})
```

#### Implementation of `booksAvailableForLoan`

```javascript
function booksAvailableForLoan() {
  return libraryCatalog.filter(book => !book.onLoan).length
}

export { addBook, borrowBook, booksAvailableForLoan, libraryCatalog }
```

### 9. Report the Number of Books on Loan

#### Test for Reporting the Number of Books on Loan

```javascript
import { describe, it, expect } from 'vitest'
import { addBook, borrowBook, booksOnLoan, libraryCatalog } from './library'

describe('Library System', () => {
  it('should report the number of books on loan', () => {
    addBook('1984', 'George Orwell', 'novel')
    addBook('To Kill a Mockingbird', 'Harper Lee', 'novel')
    borrowBook('1984', 'George Orwell')
    const result = booksOnLoan()
    expect(result).toBe(1)
  })
})
```

#### Implementation of `booksOnLoan`

```javascript
function booksOnLoan() {
  return libraryCatalog.filter(book => book.onLoan).length
}

export { addBook, borrowBook, booksOnLoan, libraryCatalog }
```

### 10. Report Overdue Books

#### Test for Reporting Overdue Books

```javascript
import { describe, it, expect } from 'vitest'
import { addBook, borrowBook, overdueBooks, libraryCatalog } from './library'

describe('Library System', () => {
  it('should report overdue books', () => {
    addBook('1984', 'George Orwell', 'novel')
    const book = borrowBook('1984', 'George Orwell')
    book.onLoan = new Date(Date.now() - 1000 * 60 * 60 * 24 * 15) // 15 days ago
    const result = overdueBooks()
    expect(result).toBe(1)
  })
})
```

#### Implementation of `overdueBooks`

```javascript
function overdueBooks() {
  const today = new Date()
  const overdueLimit = 1000 * 60 * 60 * 24 * 14 // 14 days
  return libraryCatalog.filter(book => book.onLoan && (today - book.onLoan) > overdueLimit).length
}

export { addBook, borrowBook, overdueBooks, libraryCatalog }
```

### 11. Save the Library Catalog to a File

#### Test for Saving the Library Catalog

```javascript
import { describe, it, expect } from 'vitest'
import fs from 'fs/promises'
import { addBook, saveCatalog, libraryCatalog } from './library'

describe('Library System', () => {
  it('should save the library catalog to a file', async () => {
    addBook('1984', 'George Orwell', 'novel')
    await saveCatalog('catalog.json')
    const savedCatalog = JSON.parse(await fs.readFile('catalog.json', 'utf8'))
    expect(savedCatalog).toEqual(libraryCatalog)
  })
})
```

#### Implementation of `saveCatalog`

```javascript
import fs from 'fs/promises'

async function saveCatalog(filename) {
  await fs.writeFile(filename, JSON.stringify(libraryCatalog, null, 2))
}

export { addBook, saveCatalog, libraryCatalog }
```

### 12. Load the Library Catalog from a File

#### Test for Loading the Library Catalog

```javascript
import { describe, it, expect } from 'vitest'
import fs from 'fs/promises'
import { addBook, loadCatalog, libraryCatalog } from './library'

describe('Library System', () => {
  it('should load the library catalog from a file', async () => {
    const mockCatalog = [{ title: '1984', author: 'George Orwell', category: 'novel' }]
    await fs.writeFile('catalog.json', JSON.stringify(mockCatalog, null, 2))
    await

 loadCatalog('catalog.json')
    expect(libraryCatalog).toEqual(mockCatalog)
  })
})
```

#### Implementation of `loadCatalog`

```javascript
import fs from 'fs/promises'

async function loadCatalog(filename) {
  const data = await fs.readFile(filename, 'utf8')
  libraryCatalog = JSON.parse(data)
}

export { addBook, loadCatalog, libraryCatalog }
```

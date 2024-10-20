# Library

## What we learn in these lectures:

The purpose of this lecture is to learn:
- basic es6 javascript,
- modules,
- objects,
- Arrays
- functional style programming with filter, map and reduce.
- node.js APIs for saving and loading files, and
- async/await for asynchronous programming.

### Excluded

In this lecture we will not learn about class and inheritance.

## Design

The library has a library catalog (`libraryCatalog`) that is represented by an Array of objects, where each object represents a book title.

To start with, a book title object has properties: `title`, `author` and `category`. Where category is either of: 'novel', 'facts' or 'dictionary'

The library system is a command line program that presents the status of the library and a menu of operations to the user, then waits for the user to input which operation to run.

When the operation is completed, the program loops back to the start, and once again presents the library status and the menu of available operations.

Initially the library status consists of the count of book titles in the library catalog.

## Functions in the library system

We will implement the following operations (in order):
  1. add a book title to the library catalog. The program will prompt for title, then author and create a book object and add to the libraryCatalog.

  2. search for a book title based on title. The program will prompt for a title, the print any matching books from the libraryCatalog

  3. search for a book where title matches a substring

  4. search for a book where the author matches a substring

  5. search for a book matching both title and author

  6. borrow a book from the search result. Borrowing a book means adding a property: `onLoan` and setting it to the date when it was loaned.

  7. return a borrowed book. Means removing the property `onLoan`

  8. report the number of books available for loan in the library

  9. report the number of books on loan by a library customer

  10. report the number of books that have passed the due date for returning

  11. save the `libraryCatalog` to a file

  12. load the `libraryCatalog` from a file

## Tests first

We will write unit tests using vitest before we implement each function of the library system to make sure that the implementation of the functions actually do what we expect. We will write a small test, then implement just enough function code to pass the test, then add another small test, and then implement the smallest possible solution, and so on and so forth.

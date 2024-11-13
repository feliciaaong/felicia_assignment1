# Assignment 1
## Book Management 
Book Management allow librarian to add books, get all books information and also update book inormation and also tracks the memeber history of borrowed books.
It is also able to register an member to borrow books. 

## Installation 
1. Clone the Repository
2. Open The Folder 
3. Run App.js to See How it Works 
4. Edit the Code in App.js to Your Liking 

## Functions  
Import the Module to Use the Function
```Javascript
const book = require('./felicia_BookManagement.js');

book.addBook(bookTitle,bookAuthor,bookgenre,bookisbn,status)
console.log(JSON.stringify(book.getBook(0),null,2));
book.updateBook(bookTitle,update)
book.RegisterMember(Name,memberid,Phone,borrowedBooks)
book.borrowedBooks(memberid,bookisbn)
book.ReturnBook(memberid,bookisbn)
book.BorrowedbookHistory(memberid,bookisbn)
```


## Features

**Add Book**: This Function Allows Librarian to Add New Book to the Library 
**Get Books**: Allows Librarian to Check the Books that in is the Library and status of Books
**Update Book**: Allow Librarian to Update Book isbn
**Register Member** : This Function Register Member
**Borrow Book** : This Function Lets Members Borrow Books
**Return Book** : This Function Lets Members Return Books
**Borrowed Book History** : This Function Lets Librarian Checks Memebers Borrowed Boooks History


## References
(https://www.w3schools.com/nodejs/nodejs_modules.asp)

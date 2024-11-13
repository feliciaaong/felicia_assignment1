# Assignment 1
## Book Management 
Book Management allow librarian to add books, get all books information and also update book inormation and also tracks the memeber history of borrowed books.
It is also able to register an member to borrow books. 

## Installation 
1. Clone the Repository
2. Open The Folder 
3. Run App.js to See How it Works 
4. Edit the Code in App.js to Your Liking 

## Functions and Features 
Import the Module to Use the Function
````javascript
const book = require('./felicia_BookManagement.js');
```
**Add Book**: This Function Allows Librarian to Add New Book to the Library 
````book.addBook(bookTitle,bookAuthor,bookgenre,bookisbn,status)````

**Get Books**: Allows Librarian to Check the Books that in is the Library and status of Books
````console.log(JSON.stringify(book.getBook(0),null,2));````

**Update Book**: Allow Librarian to Update Book isbn
````book.updateBook(bookTitle,update)````

**Register Member** : This Function Register Member
````book.RegisterMember(Name,memberid,Phone,borrowedBooks)````

**Borrow Book** : This Function Lets Members Borrow Books
````book.borrowedBooks(memberid,bookisbn)````

**Return Book** : This Function Lets Members Return Books
````book.ReturnBook(memberid,bookisbn)````

**Borrowed Book History** : This Function Lets Librarian Checks Memebers Borrowed Boooks History
````book.BorrowedbookHistory(memberid,bookisbn)````

```
````

## References
(https://www.w3schools.com/nodejs/nodejs_modules.asp)

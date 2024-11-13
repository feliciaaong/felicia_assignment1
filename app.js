const book = require('./felicia_BookManagement.js');

//Adding new book to the book array
book.addBook('Summerhaven','Tiffany Odekirk','Romance',1234);
//Getting all books from the book array
console.log(JSON.stringify(book.getBook(0),null,2));
console.log(JSON.stringify(book.getBook(1),null,2));
//Update Book isbn
book.updateBook('Summerhaven',{isbn:6767});
//Getting the updated book from the book array
console.log(JSON.stringify(book.getBook(1),null,2));
//Registering a new member
book.RegisterMember('Alice',123,1234567890);
//Borrowing a book to a member
book.borrowedBooks(123,8787);
//Returning a book from a member
book.ReturnBook(123,8787);
//History of book that memebers has borrowed
book.BorrowedbookHistory(123);


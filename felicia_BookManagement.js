module.exports = {
    book :[{bookTitle:'Twilight',bookAuthor:'Stephenie Meyer',bookgenre:'Fantasy',bookisbn:8787,status:'Available'},],
    memebers:[],
    // Adding new book to the book array 
    addBook(bookTitle,bookAuthor,bookgenre,bookisbn,status){
        this.book.push({title:bookTitle,author:bookAuthor,genre:bookgenre,isbn:bookisbn,status:"Available"});
        console.log("Book added successfully")
    },
    // Getting all the book from the book array
    getBook(index){
        return this.book[index];
    },
    //To update properties of a book 
    updateBook(bookTitle,update){
        const findbook = this.book.findIndex(book => book.title === bookTitle);
        if(findbook === -1){
            console.log("Book not found");
            return;
    } 
    const booktoupdate = this.book[findbook];
    Object.keys(update).forEach(key => {
        if(booktoupdate.hasOwnProperty(key)){
            booktoupdate[key] = update[key];  
        }
    });
    console.log("Book updated successfully");
    },
    RegisterMember(Name,memberid,Phone,borrowedBooks){
        this.memebers.push({name:Name,memberid:memberid,phone:Phone,borrowedBooks:[]});
        console.log("Member added successfully");
    },
    //  To borrow a book to a member
    borrowedBooks(memberid,bookisbn){ 
       const member = this.memebers.find(member => member.memberid === memberid);//To find the id of the memeber 
         if(!member){
              console.log("Member not found"); //if the member is not found, will not borrow the book
              return;
         }
        const book = this.book.find(book => book.bookisbn === bookisbn);// To find the book isbn 
        if(!book || book.status === "Borrowed"){ // if the book isbn is not found or is borrowed to another memeber it will return that book is unavaliable 
            console.log("Book not Avaliable");
            return;
        }
        book.status = "Borrowed";
        member.borrowedBooks.push({title:book.bookTitle,isbn:bookisbn,borrowedDate:new Date(),returnDate:null});
        console.log("Book borrowed successfully");
    },
    ReturnBook(memberid,bookisbn){
        const member = this.memebers.find(member => member.memberid === memberid);//To find the id of the memeber 
        if(!member){
            console.log("Member not found");//if the member is not found,wont return the book
            return;
        }
        const book = this.book.find(book => book.bookisbn === bookisbn);// To find the book isbn 

        if(!book || book.status !== "Borrowed"){ // if the book isbn is not found or is borrowed to another memeber it will return that book is unavaliable 
            console.log("Book is not borrowed by the member");
            return;
        }
        book.status = "Avaliable"// To find the book isbn
        const borrowedbook = member.borrowedBooks.find(book => book.isbn === bookisbn);
        borrowedbook.returnDate = new Date();

    },
    //To view the books that have been borrowed by the member
    BorrowedbookHistory(memberid){ 
        const member = this.memebers.find(member => member.memberid === memberid);//To find the id of the memeber 
        if(!member){
            console.log("Member not found");//if the member is not found, will not borrow the book
            return;
        }
        console.log("Borrowed Books",member.borrowedBooks,"by",member.name);
    }
};
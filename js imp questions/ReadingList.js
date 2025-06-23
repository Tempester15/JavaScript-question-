const books = [
    { title: "The Hobbit", author: "J.R.R. Tolkien", alreadyRead: true },
    { title: "The Lord of the Rings", author: "J.R.R. Tolkien", alreadyRead: false },
    { title: "1984", author: "George Orwell", alreadyRead: true }
  ];
  
  books.forEach(book => {
    const message = book.alreadyRead
      ? `You already read "${book.title}" by ${book.author}`
      : `You still need to read "${book.title}" by ${book.author}`;
    console.log(message);
  });
  
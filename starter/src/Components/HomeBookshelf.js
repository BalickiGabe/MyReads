import { Link } from "react-router-dom";
import Shelf from "./Shelf";
import { useState, useEffect } from "react";
import * as BooksAPI from "../BooksAPI.js";

const HomeBookshelf = () => {
  const [allBooks, setAllBooks] = useState([]);

  const getBooks = async () => {
    const res = await BooksAPI.getAll();
    setAllBooks(res);
  };

  useEffect(() => {
    getBooks();
  }, []);

  return (
    <div className="app">
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <Shelf
              shelfName={"Currently Reading"}
              shelf={"currentlyReading"}
              books={allBooks.filter(
                (book) => book.shelf === "currentlyReading"
              )}
              getBooks={getBooks}
            />
            <Shelf
              shelfName={"Want to Read"}
              shelf={"wantToRead"}
              books={allBooks.filter((book) => book.shelf === "wantToRead")}
              getBooks={getBooks}
            />
            <Shelf
              shelfName={"Read"}
              shelf={"read"}
              books={allBooks.filter((book) => book.shelf === "read")}
              getBooks={getBooks}
            />
          </div>
        </div>
        <div className="open-search">
          <Link to={"/browse-catalog"}>Add a book</Link>
        </div>
      </div>
    </div>
  );
};

export default HomeBookshelf;

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import * as BooksAPI from "../BooksAPI.js";
import Book from "./Book";

const AddBook = () => {
  const [query, setQuery] = useState("");
  const [bookResults, setBookResults] = useState([]);
  const [myBooks, setMyBooks] = useState([]);

  const getBooks = async () => {
    const res = await BooksAPI.getAll();
    setMyBooks(res);
  };

  useEffect(() => {
    getBooks();
  }, []);

  const searchResults = async () => {
    const res = await BooksAPI.search(query);
    if (!Array.isArray(res)) {
      setBookResults([]);
    } else {
      setBookResults(res);
    }
  };

  useEffect(() => {
    if (query !== "") {
      searchResults();
    } else {
      setBookResults([]);
    }
  }, [query]);

  return (
    <div className="app">
      <div className="search-books">
        <div className="search-books-bar">
          <Link to={"/"} className="close-search">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              value={query}
              placeholder="Search by title, author, or ISBN"
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {bookResults.map((book) => {
              return (
                <li key={book.id}>
                  {
                    <Book
                      book={{
                        ...book,
                        shelf:
                          myBooks.find((b) => b.id === book.id)?.shelf ??
                          "none",
                      }}
                    />
                  }
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default AddBook;

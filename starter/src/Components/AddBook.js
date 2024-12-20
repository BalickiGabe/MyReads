import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import * as BooksAPI from "../BooksAPI.js";
import Book from "./Book";

const AddBook = () => {
  const [query, setQuery] = useState("");
  const [bookResults, setBookResults] = useState([]);

  useEffect(() => {
    const searchResults = async () => {
      const res = await BooksAPI.search(query);
      if (!Array.isArray(res)) {
        setBookResults([]);
      } else {
        setBookResults(res);
      }
    };
    if (query !== "") {
      searchResults();
    }
  }, [query]);

  console.log(bookResults);
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
              return <li key={book.id}>{<Book book={book} />}</li>;
            })}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default AddBook;

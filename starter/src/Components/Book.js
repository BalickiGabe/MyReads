import * as BooksAPI from "../BooksAPI.js";

const Book = ({ book, getBooks }) => {
  const handleChangeShelf = async (newShelf) => {
    await BooksAPI.update(book, newShelf);
    getBooks();
  };

  return (
    <div className="book">
      <div className="book-top">
        {book.imageLinks.thumbnail ? (
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${book.imageLinks.thumbnail})`,
            }}
          ></div>
        ) : null}

        <div className="book-shelf-changer">
          <select
            name="selectedShelf"
            defaultValue={book.shelf}
            onChange={(e) => handleChangeShelf(e.target.value)}
          >
            <option value="none" disabled>
              Move to...
            </option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>
      </div>
      <div className="book-title">{book.title}</div>
      <div className="book-authors">
        {book.authors.map((author) => `${author} `)}
      </div>
    </div>
  );
};

export default Book;

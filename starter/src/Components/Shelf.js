import Book from "./Book";

const Shelf = ({ shelfName, books, getBooks }) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{shelfName}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map((book) => {
            return (
              <li key={book.id}>{<Book book={book} getBooks={getBooks} />}</li>
            );
          })}
        </ol>
      </div>
    </div>
  );
};

export default Shelf;

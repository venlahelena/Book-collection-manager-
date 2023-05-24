import { useState } from "react";
import UpdateExisting from "./UpdateExisting";
import Details from "./Details";

import "../styles/Book.css";

const Book = ({ book, onDelete, onUpdate }) => {
  const [showBook, setShowBook] = useState(false);

  return (
    <div className="collection-container">
      <div className="book">
        <div className="book-title-author">
          <h3 className="book-h3">{book.title}</h3>
          <h4 className="book-h4">Author: {book.author}</h4>
        </div>
        <div>
          <p>{book.description}</p>
        </div>
        <div className="collection-buttons-container">
          <Details
            onShow={() => setShowBook(!showBook)}
            showText={!showBook}
            buttonText={showBook ? "Close" : "Update book information"}
            buttonClassName={showBook ? "btn btn-close" : "btn btn-update"}
          />
        </div>
      </div>
      {showBook && (
        <div className="update-existing-popup">
          <UpdateExisting book={book} onUpdate={onUpdate} onDelete={onDelete} />
        </div>
      )}
    </div>
  );
};

export default Book;

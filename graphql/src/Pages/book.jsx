const Book = ({ book }) => {
    return (
      <div>
        <h3>Book ID: {book.id}</h3>
        <p>Price: {book.price}</p>
        <h4>Authors:</h4>
        <ul>
        {book.authors && book.authors.length > 0 ? (
          book.authors.map((author) => (
            <li key={author.id}>
              {author.name} - {author.address}
            </li>
          ))
        ) : (
          <li>No authors found.</li>
        )}
        </ul>
      </div>
    );
  };
  
  export default Book;
  
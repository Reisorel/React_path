import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Books() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchAllBooks = async () => {
      try {
        console.log("Fetching books from backend...");
        const res = await fetch("http://localhost:3000/books");
        const data = await res.json();
        console.log("Data received from backend:", data); // Log les données reçues
        setBooks(data); // Met à jour l'état avec les données reçues
      } catch (err) {
        console.log("Error while fetching books:", err);
      }
    };
    fetchAllBooks();
  }, []);

  const handleDelete = async (id) => {
    try {
      await fetch("http://localhost:3000/books/" + id, {
        method: "DELETE",
      });
      console.log(`Book with ID ${id} deleted successfully.`);
      setBooks(books.filter((book) => book.id !== id)); // Met à jour l'état sans recharger la page
    } catch (err) {
      console.log("Error while deleting book:", err);
    }
  };

  return (
    <div>
      <h1>Franz book shop</h1>
      <div className="books">
        {books.map((book) => (
          <div className="book" key={book.id}>
            {book.cover && <img src={book.cover} alt="" />}
            <h2>{book.title}</h2>
            <p>{book.desc}</p>
            <p>{book.price}</p>
            <button className="delete" onClick={() => handleDelete(book.id)}>
              Delete
            </button>
            <button className="update">
              <Link to={`/update/${book.id}`}>Update</Link>
            </button>
          </div>
        ))}
      </div>
      <div>
        <button>
          <Link to="/add">Add New Book</Link>
        </button>
      </div>
    </div>
  );
}

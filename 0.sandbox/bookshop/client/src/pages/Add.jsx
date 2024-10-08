import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Add() {
  const [book, setBook] = useState({
    title: "",
    desc: "",
    price: 0,
    cover: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/books", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(book),
      });

      // Vérification du statut de la réponse
      console.log("Book object before sending:", book);

      if (response.ok) { // `response.ok` vérifie si le statut HTTP est dans la plage 200-299
        console.log("Requête envoyée côté frontend");
        navigate("/books");
      } else {
        console.error(`Erreur: ${response.statusText}`); // Si le statut n'est pas OK
      }
    } catch (err) {
      console.log("Erreur lors de l'envoi de la requête:", err);
    }
  };

  return (
    <div className="form">
      <h1>Add New Book</h1>
      <input
        type="text"
        placeholder="title"
        onChange={handleChange}
        name="title"
      />
      <input
        type="text"
        placeholder="description"
        onChange={handleChange}
        name="desc"
      />
      <input
        type="number"
        placeholder="price"
        onChange={handleChange}
        name="price"
      />
      <input
        type="text"
        placeholder="cover"
        onChange={handleChange}
        name="cover"
      />
      <button
      className="formButton"
      onClick={handleClick}>Add</button>
    </div>
  );
}

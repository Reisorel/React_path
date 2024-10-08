import express from "express";
import mysql from "mysql2";
import cors from "cors"

const app = express();

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "hola1992",
  database: "test",
});

app.use(express.json())
app.use(cors())

app.get("/", (req, res) => res.json("Hello, this is the backend"));

app.get("/books", (req, res) => {
  const q = "SELECT * FROM books";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.post("/books", (req, res) => {
  try {
    console.log("Received request body:", req.body);

    const q = "INSERT INTO books (`title`, `desc`, `price`, `cover`) VALUES (?, ?, ?, ?)";
    const values = [
      req.body.title,
      req.body.desc,
      req.body.price,
      req.body.cover];

    db.query(q, values, (err, data) => {
      if (err) {
        console.error("Erreur lors de l'insertion dans MySQL:", err);
        return res.status(500).json(err);
      }

      console.log("Données insérées avec succès dans la base de données:", data);
      return res.json("Book has been created successfully");
    });
  } catch (err) {
    console.error("Une erreur s'est produite lors du log :", err);
  }
});


app.delete("/books/:id", (req, res) => {
  const bookId = req.params.id;
  const q = "DELETE from books WHERE id = ?";

  db.query(q, [bookId], (err, data) =>{
    if (err) return res.json(err);
    return res.json("Book has been deleted successfully");
  })
})

app.put("/books/:id", (req, res) => {
  const bookId = req.params.id;
  const q = "UPDATE books SET `title`= ?, `desc`= ?, `price`= ?, `cover`= ? WHERE id = ?";

  const values = [
    req.body.title,
    req.body.desc,
    req.body.price,
    req.body.cover
  ];

  db.query(q, [...values, bookId], (err, data) => {
    if (err) {
      console.error("Erreur lors de la mise à jour dans MySQL:", err);
      return res.status(500).json(err);
    }
    console.log("Données mises à jour avec succès:", data);
    return res.json("Book has been modified successfully");
  });
});

app.listen(5000, () => {
  console.log("Connected to backend baby !");
  console.log("Le serveur écoute bien sur le port 5000");
});

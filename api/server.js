const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

//to check whether working or not
let products = [
  {
    id: 1,
    name: "Amouage 46",
    price: "40,000",
    image: "assets/luxuryPerfumes/amouage.png",
  },
  {
    id: 2,
    name: "Roja Amber Aoud",
    price: "71,100",
    image: "assets/luxuryPerfumes/roja.png",
  },
  {
    id: 3,
    name: "Creed Flacon",
    price: "99,000",
    image: "assets/luxuryPerfumes/creed flacon.png",
  },
  {
    id: 4,
    name: "Baccarat Rouge 540",
    price: "42,400",
    image: "assets/luxuryPerfumes/baccarat.png",
  }
];

app.get("/", (req, res) => {
  res.send("PerfumeX API is running");
});

// GET all
app.get("/api/products", (req, res) => {
  res.json(products);
});

// GET one
app.get("/api/products/:id", (req, res) => {
  const product = products.find((p) => p.id === +req.params.id);
  if (!product) return res.status(404).json({ message: "Not Found" });
  res.json(product);
});

// POST (create)
app.post("/api/products", (req, res) => {
  const newProduct = { id: Date.now(), ...req.body };
  products.push(newProduct);
  res.status(201).json(newProduct);
});

// PUT (update)
app.put("/api/products/:id", (req, res) => {
  const index = products.findIndex((p) => p.id === +req.params.id);
  if (index === -1) return res.status(404).json({ message: "Not found" });
  products[index] = { ...products[index], ...req.body };
  res.json(products[index]);
});

// DELETE
app.delete("/api/products/:id", (req, res) => {
  products = products.filter((p) => p.id !== +req.params.id);
  res.status(204).send();
});

const PORT = 2000;
app.listen(PORT, () => console.log(`API running on http://localhost:${PORT}`));

const express = require("express");

const app = express();
const PORT = 3000;

const filofood = [
  {
    id: 1,
    name: "Chicken Adobo",
    price: "P85",
  },
  {
    id: 2,
    name: "Pancit Canton",
    price: "P50",
  },
  {
    id: 3,
    name: "Beef Tapa",
    price: "P95",
  },
  {
    id: 4,
    name: "Burger Steak",
    price: "P80"
  },

];

//retrieve all filofood
app.get("/api/filofood", (req, res) => {
  res.json(filofood);
});

//retrieve individual data/filofood
app.get("/api/filofood/:id", (req, res) => {
  const id = Number(req.params.id);
  const dish = filofood.find((dish) => dish.id === id);

  if (!dish) {
    return res.status(404).json({ message: "Filofood not found" });
  }
  res.json(dish);
});

app.use(express.static(__dirname));
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

const express = require("express");
const path = require("path");
const pokemon = require("./pokemon.json");

const app = express();
const PORT = 3000;

// add middlewares
// app.use(express.static(path.join(__dirname, "..", "rt-hub/build")));
// app.use(express.static("public"));
//
// app.use((req, res, next) => {
//   res.sendFile(path.join(__dirname, "..", "build", "index.html"));
//   next();
// });

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/pokemon", (req, res) => {
  res.json(pokemon);
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

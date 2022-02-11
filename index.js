
const express = require("express");

const app = express();
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

app.use("/", (req, res) => {
  res.end("HELLO WORLD");
});

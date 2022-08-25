const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to the backend");
});
app.get("/book", (req, res) => {
  res.send("Welcome to the books");
});

app.listen(8000, () => {
  console.log("Listening on port 8000");
});

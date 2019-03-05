const data = require("./data/artists.json");
const express = require("express");
const app = express();
const port = 3000;

app.set("trust proxy", "loopback");

// view engine setup
app.set("view engine", "pug");

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/charles", (req, res) => {
  res.render("main", data.artist[0]);
});
app.get("/marilyn", (req, res) => {
  res.render("main", data.artist[1]);
});
app.get("/jean", (req, res) => {
  res.render("main", data.artist[2]);
});
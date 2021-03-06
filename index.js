require("dotenv").config();
const express = require("express");
const app = express();

const port = process.env.PORT || 3333;

app.use(express.static(__dirname + "/dist"));
app.use(express.static(__dirname + "/public"));

app.get("*", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`App listening on port ${port}`);
  }
});

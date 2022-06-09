const express = require("express");
const PORT = 3001;

const app = express();

app.get("/", (req, res) => {
  res.send({ message: "Docker is Amazing!" });
});

app.listen(PORT);

console.log(`Running on PORT ${PORT}`);

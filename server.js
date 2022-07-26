const express = require("express");
const app = express();

app.get("/tree", (req, res) => {  
  res.json({
    'my favourite tree': `sycamore 🌳`
  });
});

var server = app.listen(8080, () => {
  console.log("Server running on port 8080");
});

module.exports = server;
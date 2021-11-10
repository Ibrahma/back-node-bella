const http = require("http");
var express = require('express');
const bodyParser = require("body-parser");
const cors = require("cors");
const port = process.env.PORT || 2020;


const app = express();

var corsOptions = {
  origin: "http://localhost:8080"
};

app.use(cors(corsOptions)); 

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Bella application." });
});

// server listening 
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
//npm install  body-parser cors jsonwebtoken bcryptjs --save
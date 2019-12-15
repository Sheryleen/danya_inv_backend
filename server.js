const express = require("express");
const bodyParser = require("body-parser");
const port = process.env.PORT || 8000;
const cors = require("cors");
const logger = require("morgan");

const products = require("./routes/products");
const category = require("./routes/category");

const app = express();

app.use(logger("dev"));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/", products);
app.use("/", category);

app.listen(port, function() {
  console.log("listening on port: ", port);
});

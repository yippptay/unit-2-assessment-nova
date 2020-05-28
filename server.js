// dependencies
const express = require("express");
const app = express();
const methodOverride = require("method-override");
const todo = require("./controllers/todo.js");
require("dotenv").config();
const { PORT = 3000 } = process.env;
const show = console.log;

// middleware
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());

// controllers
app.use("/todos", todo);
app.get("/", (req, res) => res.redirect("/todos"));

// listen
app.listen(PORT, () => show("listening on port", PORT));

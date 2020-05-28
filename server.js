// dependencies
const express = require("express");
const app = express();
const todo = require("./controllers/todo.js");
const PORT = 3000;
const show = console.log;

// middleware
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());

// controllers
app.use("/todos", todo);

// models
const todos = require("./models/todos.js");

// listen
app.listen(PORT, () => show("listening on port", PORT));

// dependencies
const express = require("express");
const app = express();
const methodOverride = require("method-override");
const todo = require("./controllers/todo.js");
const PORT = 3000;
const show = console.log;

// middleware
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());

// controllers
app.use("/todos", todo);

// listen
app.listen(PORT, () => show("listening on port", PORT));

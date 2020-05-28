const express = require("express");
const todo = express.Router();
const todos = require("../models/todos.js");
const show = console.log;

// Index
todo.get("/", (req, res) => {
  show("INDEX");
  show("todos", todos);
  res.render("Index", {
    todos,
  });
});

// Create
todo.post("/new", (req, res) => {
  show("CREATE");
  const { todo } = req.body;
  const done = false;
  todos.push({ todo, done });
  res.redirect("/todos");
});

// Delete
todo.delete("/:index", (req, res) => {
  const { index } = req.body;
  todos.splice(index, 1);
  res.redirect("/todos");
});

module.exports = todo;

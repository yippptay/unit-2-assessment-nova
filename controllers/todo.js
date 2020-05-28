const express = require("express");
const todo = express.Router();
const todos = require("../models/todos.js");
const show = console.log;

// INDEX route
todo.get("/", (req, res) => {
  show("got it");
  res.render("Index", {
    todos,
  });
});

// NEW route
todo.post("/new", (req, res) => {
  todos.push(req.body);
  res.redirect("/todos");
});

module.exports = todo;

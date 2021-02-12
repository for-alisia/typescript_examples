"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTodo = exports.updateTodo = exports.getTodos = exports.createTodo = void 0;
var todo_1 = require("../models/todo");
var TODOS = [];
exports.createTodo = function (req, res) {
    var text = req.body.text;
    var newTodo = new todo_1.Todo(Math.random().toString(), text);
    TODOS.push(newTodo);
    res.json({ message: 'Created the todo', createdTodo: newTodo });
};
exports.getTodos = function (_, res) {
    res.json({ todos: TODOS });
};
exports.updateTodo = function (req, res) {
    var todoId = req.params.id;
    var updatedText = req.body.text;
    var todoIndex = TODOS.findIndex(function (todo) { return todo.id === todoId; });
    if (todoIndex < 0) {
        throw new Error('Could not find todo!');
    }
    TODOS[todoIndex].text = updatedText;
    res.json({ message: 'updated!', updatedTodo: TODOS[todoIndex] });
};
exports.deleteTodo = function (req, res) {
    var todoId = req.params.id;
    var todoIndex = TODOS.findIndex(function (todo) { return todo.id === todoId; });
    if (todoIndex < 0) {
        throw new Error('Could not find todo!');
    }
    TODOS = TODOS.filter(function (todo) { return todo.id !== todoId; });
    res.json({
        message: 'TODO deleted',
    });
};

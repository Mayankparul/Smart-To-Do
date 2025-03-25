const express = require("express");
const router = express.Router();
const Todo = require("../models/Todo");

// ✅ Route to Get All Todos
router.get("/", async (req, res) => {
    try {
        const todos = await Todo.find();
        res.json(todos);
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
});

// ✅ Route to Add a New Todo
router.post("/add", async (req, res) => {
    try {
        const { title } = req.body;
        const newTodo = new Todo({ title, completed: false });
        await newTodo.save();
        res.json(newTodo);
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
});

// ✅ Route to Delete a Todo
router.delete("/:id", async (req, res) => {
    try {
        const todo = await Todo.findByIdAndDelete(req.params.id);
        if (!todo) {
            return res.status(404).json({ message: "Task not found" });
        }
        res.json({ message: "Task deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
});

module.exports = router;

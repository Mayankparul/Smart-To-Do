import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { fetchTodos } from "./services/todoService";

function App() {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState("");

    useEffect(() => {
        const getTodos = async () => {
            const data = await fetchTodos();
            setTodos(data);
        };
        getTodos();
    }, []);

    const addTodo = async () => {
        if (!newTodo.trim()) return;

        const response = await fetch("http://localhost:5000/api/todos/add", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ title: newTodo }),
        });

        if (response.ok) {
            const newTask = await response.json();
            setTodos([...todos, newTask]);
            setNewTodo("");
        }
    };

    const deleteTodo = async (id) => {
        const response = await fetch(`http://localhost:5000/api/todos/${id}`, {
            method: "DELETE",
        });

        if (response.ok) {
            setTodos(todos.filter((todo) => todo._id !== id));
        } else {
            console.error("Failed to delete the task");
        }
    };

    return (
        <div className="container vh-100 d-flex justify-content-center align-items-center">
            <div className="glassmorphism p-4 rounded shadow-lg w-50 text-center">
                <h1 className="mb-4">📝 Smart To-Do List</h1>
                <div className="input-group mb-3">
                    <input
                        type="text"
                        className="form-control bg-dark text-white border-secondary"
                        value={newTodo}
                        onChange={(e) => setNewTodo(e.target.value)}
                        placeholder="Enter a new task"
                    />
                    <button className="btn btn-primary" onClick={addTodo}>Add Task</button>
                </div>
                <ul className="list-group">
                    {todos.map((todo) => (
                        <li key={todo._id} className="list-group-item d-flex justify-content-between align-items-center bg-dark text-white border-secondary">
                            {todo.title}
                            <button className="btn btn-danger btn-sm" onClick={() => deleteTodo(todo._id)}>❌ Delete</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default App;

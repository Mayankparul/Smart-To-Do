const API_URL = "http://localhost:5000/api/todos";

export const fetchTodos = async () => {
    try {
        const response = await fetch(API_URL);
        return await response.json();
    } catch (error) {
        console.error("Error fetching todos:", error);
        return [];
    }
};

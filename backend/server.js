const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const todoRoutes = require("./routes/todoRoutes");
app.use("/api/todos", todoRoutes);


app.get("/", (req, res) => {
    res.send("Smart To-Do Server is Running!");
});

const mongoose = require("mongoose");

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)

  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("MongoDB Connection Error:", err));


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

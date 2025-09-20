import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json()); 

let todos = [];

app.get("/api/todo-list", (req, res) => {
  res.json(todos);
});

app.post("/api/todo-list", (req, res) => {
  const newTask = { _id: Date.now().toString(), text: req.body.text };
  todos.push(newTask);
  res.json(newTask);
});

app.listen(5555, () => console.log("API on http://localhost:5555"));



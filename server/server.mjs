import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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

const frontPath = path.join(__dirname, "..", "docs");
app.use(express.static(frontPath));

app.get("/", (req, res) => {
  res.sendFile(path.join(frontPath, "index.html"));
});

const PORT = process.env.PORT || 5555;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));



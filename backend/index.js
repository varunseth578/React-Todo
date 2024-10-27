const express = require("express");
const app = express();
const { createTodo, updateTodo } = require("./types"); // Make sure updateTodo is imported if used
const { todo } = require("./db");
const cors = require("cors")
app.use(express.json());
app.use(cors());

app.post("/todo", async function(req, res) {
  const createPayload = req.body;
  const parsedPayload = createTodo.safeParse(createPayload);
  if (!parsedPayload.success) {
    res.status(411).json({
      msg: "you sent the wrong inputs",
    });
    return;
  }
  await todo.create({
    title: createPayload.title,
    desc: createPayload.desc,
    completed: false,
  });
  res.json({
    msg: "todo created",
  });
});

app.get("/todos", async function(req, res) {
  const todos = await todo.find({});
  res.json({
    todos,
  });
});

app.put("/completed", async function(req, res) {
  const updatePayload = req.body;
  const parsedPayload = updateTodo.safeParse(updatePayload);
  if (!parsedPayload.success) {
    res.status(411).json({
      msg: "you sent the wrong inputs",
    });
    return;
  }
  await todo.update(
    { _id: req.body.id },
    { completed: true }
  );
  res.json({
    msg: "todo marked as completed",
  });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});

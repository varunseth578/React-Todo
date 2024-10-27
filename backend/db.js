const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://ivarunseth:yLMkrysxa42X6ORu@cluster0.sea1c.mongodb.net/todo"
);
//mongodb+srv://ivarunseth:yLMkrysxa42X6ORu@cluster0.sea1c.mongodb.net/todo
const todoSchema = mongoose.Schema({
  title: String,
  desc: String,
  completed: { type: Boolean, default: false },
});

const todo = mongoose.model("todo", todoSchema);
module.exports = {
  todo,
};

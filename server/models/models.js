const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  subject: String,
  teacher: String,
  name: String,
  marks: Number,
  Table:String
});

const Task = mongoose.model("task", TaskSchema);
const Table1 = mongoose.model("Student", TaskSchema);
const Table2 = mongoose.model("Teacher", TaskSchema);
const Table3 = mongoose.model("Marks", TaskSchema);



module.exports = {Task,Table1,Table2,Table3};

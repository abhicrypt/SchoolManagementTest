const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  
  // city: String,
  // email: String,
  // name: String,
  // phone: Number,

  subject: String,
    teacher: String,
    name: String,
    marks: Number,
    Table:String
});

const Task = mongoose.model("task", TaskSchema);

module.exports = Task;

// import { Schema, model } from "mongoose";

// const TaskSchema = new Schema({
//   subject: String,
//   teacher: String,
//   name: String,
//   marks: Number,
//   Table:String
// });

// const Task = model("task", TaskSchema);
// const Table1 = model("Student", TaskSchema);
// const Table2 = model("Teacher", TaskSchema);
// const Table3 = model("Marks", TaskSchema);



// export default {Task,Table1,Table2,Table3};

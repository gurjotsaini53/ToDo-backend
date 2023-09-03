const { model } = require("mongoose");
const todomodel = require("../models/ToDoModel");
const ToDoModel = require("../models/ToDoModel");

module.exports.getToDo = async (req, res) => {
  const toDo = await todomodel.find();
  res.send(toDo);
};

module.exports.saveToDo = async (req, res) => {
  const { text } = req.body;

  ToDoModel.create({ text }).then((data) => {
    console.log("Added Successfully");
    console.log(data);
    res.send(data);
  });
};

module.exports.UpdateToDo = async (req, res) => {
  const { _id, text } = req.body;
  ToDoModel.findByIdAndUpdate(_id, { text })
    .then(() => {
      res.send("Updated successfully");
    })
    .catch((err) => console.log(err));
};

module.exports.DeleteToDo = async (req, res) => {
  const { _id } = req.body;
  ToDoModel.findByIdAndDelete(_id)
    .then(() => {
      res.send("Deleted successfully");
    })
    .catch((err) => console.log(err));
};

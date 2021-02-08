const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const db = require("./config/mongoose");
const Task = require("./models/task");

const app = express();
const port = 8000;

// use express router
app.use("/", require("./routes"));

const jsonParser = bodyParser.json();

const urlencodedParser = bodyParser.urlencoded({ extended: false });

// setting up view engine
app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.static("./assets"));

// creating a Task
app.post("/create-task", jsonParser, function (req, res) {
  Task.create(
    {
      task: req.body.task,
    },
    function (err, newTask) {
      if (err) {
        console.log("Error in creating a Task!");
        return;
      }

      console.log("******", newTask);
      return res.redirect("back");
    }
  );
});

// Deleting a task
app.get("/delete-task", jsonParser, function (req, res) {
  let id = req.query.id;

  Task.findByIdAndDelete(id, function (err) {
    if (err) {
      console.log("error in deleting an object from database");
      return;
    }

    return res.redirect("back");
  });
});

// listening to the port
app.listen(port, function (err) {
  if (err) {
    console.log(`Error in running the server: ${port}`);
  }

  console.log(`Server is running on port: ${port}`);
});

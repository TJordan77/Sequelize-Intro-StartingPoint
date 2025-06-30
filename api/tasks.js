const express = require("express");
const router = express.Router();
const { Task, User } = require("../database");


// GET all tasks
router.get("/", async (req, res) => {
  const tasks = await Task.findAll();
  res.json(tasks);
});

// GET a single task by id
router.get("/:id", async (req, res) =>
{
  try
  {
  const id = Number(req.params.id);
  const task = await Task.findByPk(req.params.id);
  res.json(task);
  }
  catch(error)
  {
   res.status(501).json({message: "Server Error", error: error.message})
  }
}
)


// Patch a task by id
router.patch("/:id", async (req, res) =>
{
  try
  {
    const id = Number(req.params.id);
    const {task, complete} = req.body;
    const updateTask = await Task.update(id, {task, complete});
    res.json(updateTask)
  }
  catch(error)
  {
    res.status(501).json({message: "Server Error", error: error.message})
  }
}
)


// Delete a task by id
router.delete("/:id", async (req, res) =>
{
  try
  {
  const id = Number(req.params.id);
  const deleteTask = await Task.delete(id);
  res.json(deleteTask)
  }
  catch(error)
  {
    res.status(501).json({message: "Server Error", error: error.message})
  }

}
)

// Create a new task
router.post("/", async (req,res) =>
{
  try
  {
    // Need stuff to go in the task body
    const { title, description, completed = false } = req.body;
    if (!title || !description) {
      return res.status(400).json({ error: "Title and description are required please" });
    }
    //Removed createTask from the Task.create call. Will cause runtime error, trying to use it before it gets defined.
    const createTask = await Task.create({ title, description, completed });
  }
    catch(error)
  {
    res.status(501).json({message: "Server Error", error: error.message})
  }
}
)

module.exports = router;

// TASK 5: Create a new routes file for users, and add as many routes as you see fit
// Don't forget to export the router, and import it into api/index.js

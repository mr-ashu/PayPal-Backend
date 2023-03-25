const express = require('express');
const Task = require('../Schema/Task.schema');
const Sprint = require('../Schema/Sprint.schema');
const app = express.Router();


// Create a new task
app.post('/tasks', async (req, res) => {
  try {
    const task = new Task(req.body);
    await task.save();
    res.send(task);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

// Get all tasks in a sprint
app.get('/sprints/:id/tasks', async (req, res) => {
  try {
    const sprint = await Sprint.findById(req.params.sprintId).populate('tasks');
    res.send(sprint.tasks);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

// Update a task's assignee
app.patch('/tasks/:id/assignee', async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(req.params.id, { assignee: req.body.assignee });
    res.send(task);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

// Update a task's status
app.patch('/tasks/:id/status', async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(req.params.id, { status: req.body.status });
    res.send(task);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

module.exports = app;
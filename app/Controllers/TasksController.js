import { ProxyState } from "../AppState.js";
import Task from "../Models/TaskModel.js";
import { tasksService } from "../Services/TasksService.js";

function _drawTasks() {
  let template = ''
  let tasks = ProxyState.task
  let total = 0
  let unchecked = 0

  total = tasks.length
  unchecked = 0
  tasks.forEach(t => {
    template += t.Template
    if (!t.completed) {
      unchecked++
    }
  })
  document.getElementById('tasks-list').innerHTML = template
  document.getElementById('task-counts').innerText = `${unchecked}/${total} to do`
}

export default class TasksController {
  constructor() {
    ProxyState.on('task', _drawTasks)
    this.getAllTasks()
    _drawTasks()
  }
  async getAllTasks() {
    try {
      await
        tasksService.getAllTasks()
    } catch (error) {
      console.error(`Couldn't get tasks`, error)
    }
  }
  async addTask() {
    event.preventDefault()
    let form = event.target
    let rawTask = {
      description: form.task.value,
      completed: false
    }
    try {
      await tasksService.addTask(rawTask)
    } catch (error) {
      console.error(`Couldn't add task`, error)
    }
    form.reset()
  }
  async storeChecked(id) {
    try {
      await tasksService.storeChecked(id)
    } catch (error) {
      console.error(`Couldn't update checked`, error)
    }
  }
  async deleteTask(id) {
    try {
      await tasksService.deleteTask(id)
    } catch (error) {
      console.error(`Couldn't delete task`, error)
    }
  }


}

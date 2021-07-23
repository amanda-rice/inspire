import { ProxyState } from "../AppState.js";
import { tasksService } from "../Services/TasksService.js";

function _draw() {
  let template = ` <div class="mt-3">
            <div class="bg-light rounded shadow-light list-cards m-3 d-flex flex-column">
                <div class="d-flex justify-content-around align-items-center rounded-top text-light flex-column card-text-shadow text-center p-3">
                    <div >
                        <h5 class="">To Do</h5>
                    </div>
                    <div class="d-flex">
                        <p id="task-counts">0/0</p>
                    </div>
                </div>
                <div class="p-2 flex-grow-1">
                    <div class="tasks-list">
                    </div>
                </div>
                <form onsubmit="app.tasksController.addTask()" class="p-2 d-flex outline-dark">
                    <input type="text" name="task" class="form-control" placeholder="Add a task..." required minlength="3" maxlength="50">
                    <button type="submit" class="btn ml-2 btn-outline-dark">+</button>
                </form>
            </div>
        </div>`
  document.getElementById('list').innerHTML = template
}

function _drawTasks() {
  let tasks = ProxyState.task
  let total = tasks.length
  let unchecked = 0;
  tasks.forEach(t => {
    if (!t.isChecked) {
      unchecked++
    }
  })
  let template = ''
  ProxyState.task.forEach(t =>
    template += t.Template
  )
  document.getElementById('tasks-list').innerHTML = template
  document.getElementById('task-counts').innerText = `${unchecked}/${total} to do`
}

export default class TasksController {
  constructor() {
    ProxyState.on('task', _drawTasks)
    this.getAllTasks()
    _draw()
  }
  async getAllTasks() {
    try {
      await
        tasksService.getAllTasks()
    } catch (error) {
      console.error(`Couldn't get tasks`, error)
    }
  }
  async addTask(rawTask) {
    try {
      await tasksService.addTask(rawTask)
    } catch (error) {
      console.error(`Couldn't add task`, error)
    }
  }

}

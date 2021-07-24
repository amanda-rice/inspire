import { ProxyState } from "../AppState.js";
import Task from "../Models/TaskModel.js";
import { sandbox } from "./AxiosService.js"


class TasksService {
  async storeChecked(id) {
    let currentBox = ProxyState.task.find(t => t.id == id)
    currentBox.completed = !currentBox.completed
    const res = await sandbox.put('amanda/todos/' + id, currentBox)

    console.log("Did the checked update?")
    console.log(ProxyState.task)
  }
  async getAllTasks() {
    let res = await sandbox.get('amanda/todos')
    ProxyState.task = res.data.map(t => new Task(t))
  }
  async addTask(rawTask) {
    const res = await sandbox.post(`amanda/todos`, new Task(rawTask))
    ProxyState.task = [...ProxyState.task, new Task(res.data)]
  }
  async deleteTask(id) {
    const res = await sandbox.delete('amanda/todos/' + id)
    ProxyState.task = ProxyState.task.filter(t => t.id != id)
  }
}

export const tasksService = new TasksService()
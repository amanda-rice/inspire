import { ProxyState } from "../AppState.js";
import Task from "../Models/TaskModel.js";
import { sandbox } from "./AxiosService.js"


class TasksService {
  async getAllTasks() {
    let res = await sandbox.get('amanda/todos')
    console.log('todos', res)
  }
  async addTask(rawTask) {
    const res = await sandbox.post(`amanda/todos`, new Task(rawTask))
    console.log(res.data);
    ProxyState.task = [...ProxyState.task, new Task(res.data)]
  }
}

export const tasksService = new TasksService()
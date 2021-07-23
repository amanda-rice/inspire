import { ProxyState } from "../AppState";

export default class Task {
  constructor({ completed, description, user, _id }) {
    this.completed = completed
    this.description = description
    this.user = user || 'anonymous'
    this.id = _id
  }

  get Template() {
    return `
    <div class="col-12 d-flex align-items-center">
      <input class="px-2" onclick="app.listsController.storeChecked('${this.id}')" type="checkbox" id="task-${this.id}" name="${this.id}" value="${this.id}" ${this.completed ? 'checked' : ' '}>
      <label class="px-2 align-self-end flex-fill" id="task-${this.id}" for="task-${this.id}">${this.description}</label>
      <i class="p-2 fa fa-trash action" title="delete task" onclick="app.tasksController.deleteTask('${this.id}')"></i>
    </div>
  `
  }
}
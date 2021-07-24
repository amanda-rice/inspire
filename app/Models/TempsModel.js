
export default class Temps {
  constructor({ completed, description, user, id }) {
    this.completed = completed
    this.description = description
    this.user = user || 'anonymous'
    this.id = id
  }
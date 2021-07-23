import ClocksController from "./Controllers/ClocksController.js";
import ImagesController from "./Controllers/ImagesController.js";
import QuotesController from "./Controllers/QuotesController.js";
import TasksController from "./Controllers/TasksController.js";
import TempsController from "./Controllers/TempsController.js";

class App {
  clocksController = new ClocksController()
  imagesController = new ImagesController()
  quotesController = new QuotesController()
  tempsController = new TempsController()
  tasksController = new TasksController()
}

window["app"] = new App();

import { TaskController } from "../controller/task-controller";
import { BaseRouter } from "./base-routes";

export class TaskRoutes extends BaseRouter {
	private taskController: TaskController;

	constructor() {
		super();
		this.taskController = new TaskController();
		this.setupRoutes();
	}

	private setupRoutes(): void {
		this.router.get("/", this.taskController.getAll.bind(this.taskController));
		this.router.post(
			"/",
			this.taskController.createNew.bind(this.taskController),
		);

		this.router.get(
			"/:taskId",
			this.taskController.getById.bind(this.taskController),
		);
		this.router.delete(
			"/:taskId",
			this.taskController.deleteById.bind(this.taskController),
		);
	}
}

import { SubTaskController } from "../controller/subtask-controller";
import { BaseRouter } from "./base-routes";

export class SubTaskRoutes extends BaseRouter {
	private subTaskController: SubTaskController;
	constructor() {
		super();
		this.subTaskController = new SubTaskController();
		this.subTaskRoutes();
	}

	private subTaskRoutes() {
		this.router.post(
			"/",
			this.subTaskController.createNew.bind(this.subTaskController),
		);

		this.router.get(
			"/",
			this.subTaskController.findAll.bind(this.subTaskController),
		);

		this.router.get(
			"/:subTaskId",
			this.subTaskController.findById.bind(this.subTaskController),
		);

		this.router.delete(
			"/:subTaskId",
			this.subTaskController.deleteById.bind(this.subTaskController),
		);
	}
}

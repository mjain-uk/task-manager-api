import { CategoryController } from "../controller/category-controller";
import { BaseRouter } from "./base-routes";

export class CategoryRoutes extends BaseRouter {
	private categoryController: CategoryController;

	constructor() {
		super();
		this.categoryController = new CategoryController();
		this.setupRoutes();
	}

	private setupRoutes(): void {
		this.router.get(
			"/",
			this.categoryController.getAll.bind(this.categoryController),
		);
		this.router.get(
			"/:catId",
			this.categoryController.getById.bind(this.categoryController),
		);
		this.router.post(
			"/",
			this.categoryController.createNew.bind(this.categoryController),
		);
		this.router.delete(
			"/:catId",
			this.categoryController.deleteById.bind(this.categoryController),
		);
	}
}

import type { Category } from "../../domain/entities/category";
import { CategoryRepository } from "../../repository/category-respository";
import { TaskRepository } from "../../repository/task-repository";
import { BasicCrudUseCase } from "../base-crud/base-crud-use-case";
import { GetCategoryById } from "../category/get-category-by-id";
import { CreateNewTask } from "./create-new-task";
import { DeleteTaskById } from "./delete-task-by-id";
import { GetAllTasks } from "./get-all-tasks";
import { GetTaskById } from "./get-task-by-id";

export class TaskService {
	private repo = new TaskRepository();
	private categoryRepo = new CategoryRepository();

	private basicCrudUseCase = new BasicCrudUseCase(this.repo);

	private getCategoryById = new GetCategoryById(
		new BasicCrudUseCase<Category>(this.categoryRepo),
	);

	public getAllTasks = new GetAllTasks(this.basicCrudUseCase);
	public getById = new GetTaskById(this.basicCrudUseCase);
	public delete = new DeleteTaskById(this.basicCrudUseCase);
	public create = new CreateNewTask(
		this.basicCrudUseCase,
		this.getCategoryById,
	);
}

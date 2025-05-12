import { TaskRepository } from "../../repository/task-repository";
import { CreateNewTask } from "./create-new-task";
import { DeleteTaskById } from "./delete-task-by-id";
import { GetAllTasks } from "./get-all-tasks";
import { GetTaskById } from "./get-task-by-id";

export class TaskService {
	private repo = new TaskRepository();

	public getAllTasks = new GetAllTasks(this.repo);
	public getById = new GetTaskById(this.repo);
	public create = new CreateNewTask(this.repo);
	public delete = new DeleteTaskById(this.repo);
}

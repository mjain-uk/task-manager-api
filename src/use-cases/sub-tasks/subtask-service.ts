import type { SubTask } from "../../domain/entities/sub-task";
import { SubtaskRepository } from "../../repository/subtask-repository";
import { TaskRepository } from "../../repository/task-repository";
import { BasicCrudUseCase } from "../base-crud/base-crud-use-case";
import { CreateNewSubTask } from "./create-new-subtask";
import { DeleteSubTaskById } from "./delete-sub-task-by-id";
import { GetAllSubTasks } from "./get-all-subtasks";
import { GetSubTaskById } from "./get-subtask-by-id";

export class SubTaskService {
	private subTaskRepo = new SubtaskRepository();
	private taskRepo = new TaskRepository();
	private baseCrudUseCase = new BasicCrudUseCase<SubTask>(this.subTaskRepo);

	public create = new CreateNewSubTask(this.baseCrudUseCase, this.taskRepo);
	public findAll = new GetAllSubTasks(this.baseCrudUseCase);
	public findOneById = new GetSubTaskById(this.baseCrudUseCase);
	public deleteOneById = new DeleteSubTaskById(this.baseCrudUseCase);
}

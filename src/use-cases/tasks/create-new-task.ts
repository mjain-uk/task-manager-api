import type { Task } from "../../domain/entities/task";
import type { TaskRepository } from "../../repository/task-repository";

export class CreateNewTask {
	constructor(private taskrepository: TaskRepository) {}
	async execute(payload: Task) {
		const response = await this.taskrepository.createTask(payload);
		return response;
	}
}

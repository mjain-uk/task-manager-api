import type { TaskRepository } from "../../repository/task-repository";

export class GetAllTasks {
	constructor(private taskrepository: TaskRepository) {}
	async execute() {
		return await this.taskrepository.findAllTask();
	}
}

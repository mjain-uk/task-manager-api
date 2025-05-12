import type { TaskRepository } from "../../repository/task-repository";

export class DeleteTaskById {
	constructor(private taskrepository: TaskRepository) {}
	async execute(taskId: number | undefined) {
		const response = await this.taskrepository.deleteTaskById(taskId);
		return response;
	}
}

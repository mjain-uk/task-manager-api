import type { TaskRepository } from "../../repository/task-repository";

export class GetTaskById {
	constructor(private taskrepository: TaskRepository) {}

	async execute(taskId: number | undefined) {
		return await this.taskrepository.findTaskById(taskId);
	}
}

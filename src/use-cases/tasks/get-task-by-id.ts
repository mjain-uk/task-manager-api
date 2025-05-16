import type { TaskRepository } from "../../repository/task-repository";

export class GetTaskById {
	constructor(private taskrepository: TaskRepository) {}

	async execute(taskId: number | undefined) {
		const { category, id, title } =
			await this.taskrepository.findTaskById(taskId);
		return {
			id,
			title,
			category: category.name,
		};
	}
}

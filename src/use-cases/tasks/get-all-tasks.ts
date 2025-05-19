import type { TaskRepository } from "../../repository/task-repository";

export class GetAllTasks {
	constructor(private taskrepository: TaskRepository) {}
	async execute() {
		const tasks = await this.taskrepository.findAllTask();
		return tasks.map(({ title, id, category }) => ({
			id,
			title,
			category: category.name,
		}));
	}
}

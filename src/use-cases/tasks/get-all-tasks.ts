import type { Task } from "../../domain/entities/task";
import type { BasicCrudUseCase } from "../base-crud/base-crud-use-case";

export class GetAllTasks {
	constructor(private basicCrudUseCase: BasicCrudUseCase<Task>) {}
	async execute() {
		const tasks = await this.basicCrudUseCase.findAll({
			relations: ["category"],
		});
		return tasks.map(({ title, id, category }) => ({
			id,
			title,
			category: category.name,
		}));
	}
}

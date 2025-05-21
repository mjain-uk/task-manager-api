import type { Task } from "../../domain/entities/task";
import type { BasicCrudUseCase } from "../base-crud/base-crud-use-case";

export class GetTaskById {
	constructor(private basicCrudUseCase: BasicCrudUseCase<Task>) {}

	async execute(taskId: number | undefined) {
		const task = await this.basicCrudUseCase.findOne({
			value: taskId,
			key: "id",
			options: { relations: ["category"] },
		});
		if (!task) {
			throw new Error("Could not find the requested object");
		}

		const { id, title, category } = task;

		return {
			id,
			title,
			category: category.name,
		};
	}
}

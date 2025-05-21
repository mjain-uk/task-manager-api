import type { Task } from "../../domain/entities/task";
import type { BasicCrudUseCase } from "../base-crud/base-crud-use-case";

export class DeleteTaskById {
	constructor(private basicCrudUseCase: BasicCrudUseCase<Task>) {}
	async execute(taskId: number | undefined) {
		const response = await this.basicCrudUseCase.deleteOne({
			value: taskId,
			key: "id",
		});
		return response;
	}
}

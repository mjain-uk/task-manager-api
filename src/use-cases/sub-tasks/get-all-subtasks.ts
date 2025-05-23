import type { SubTask } from "../../domain/entities/sub-task";
import type { BasicCrudUseCase } from "../base-crud/base-crud-use-case";

export class GetAllSubTasks {
	constructor(private baseCrudUseCase: BasicCrudUseCase<SubTask>) {}
	async execute() {
		const response = await this.baseCrudUseCase.findAll();

		return response.map(({ task, id, title }) => ({
			id,
			title,
			task: task.title,
		}));
	}
}

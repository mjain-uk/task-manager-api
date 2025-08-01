import type { SubTask } from "../../domain/entities/sub-task";
import type { BasicCrudUseCase } from "../base-crud/base-crud-use-case";

export class GetSubTaskById {
	constructor(private baseCrudUseCase: BasicCrudUseCase<SubTask>) {}

	async execute(subTaskId: string | undefined) {
		const response = await this.baseCrudUseCase.findOne({
			value: subTaskId,
			key: "id",
			options: {
				relations: ["task"],
			},
		});
		return response;
	}
}

import type { SubTask } from "../../domain/entities/sub-task";
import type { BasicCrudUseCase } from "../base-crud/base-crud-use-case";

export class DeleteSubTaskById {
	constructor(private basicCrudUseCase: BasicCrudUseCase<SubTask>) {}

	async execute(subTaskId: string | undefined) {
		const response = await this.basicCrudUseCase.deleteOne({
			value: subTaskId,
			key: "id",
		});
		return response;
	}
}

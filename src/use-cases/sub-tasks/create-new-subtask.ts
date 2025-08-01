import type { SubTask } from "../../domain/entities/sub-task";
import type { CreateSubTaskPayload } from "../../dtos/sub-task/create-subtask-dto";
import type { TaskRepository } from "../../repository/task-repository";
import type { BasicCrudUseCase } from "../base-crud/base-crud-use-case";

export class CreateNewSubTask {
	constructor(
		private basicCrudUseCase: BasicCrudUseCase<SubTask>,
		private taskRepository: TaskRepository,
	) {}

	async execute({ task: taskId, title }: CreateSubTaskPayload) {
		const taskObject = await this.taskRepository.findOneWhere({
			value: taskId,
			key: "id",
		});

		if (!taskObject) {
			throw new Error("Cannot create subtask");
		}
		const response = await this.basicCrudUseCase.create({
			title,
			task: taskObject,
		});
		return response;
	}
}

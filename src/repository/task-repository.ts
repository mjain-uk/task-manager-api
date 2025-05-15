import type { Repository } from "typeorm";
import { AppDataSource } from "../db";
import { Task } from "../domain/entities/task";
import type { ITaskRepository } from "../domain/interfaces/task-repository";
import type { CreateTaskObjectDto } from "../dtos";

export class TaskRepository implements ITaskRepository {
	constructor(
		private taskRepository: Repository<Task> = AppDataSource.getRepository(
			Task,
		),
	) {}

	async findAllTask() {
		const response = await this.taskRepository.find({});
		return response;
	}

	async findTaskById(taskId: number | undefined) {
		if (!taskId) {
			throw new Error("Invalid Task Id");
		}
		const response = await this.taskRepository.findOneBy({ id: taskId });
		if (!response) {
			throw new Error("Could not find task");
		}
		return response;
	}

	async createTask(payload: CreateTaskObjectDto) {
		const object = this.taskRepository.create(payload);
		await this.taskRepository.save(object);
		return object;
	}

	async deleteTaskById(taskId: number | undefined) {
		const { affected } = await this.taskRepository.delete({ id: taskId });
		if (!affected || affected < 1) {
			throw new Error("Could not do the delete request");
		}
		return;
	}
}

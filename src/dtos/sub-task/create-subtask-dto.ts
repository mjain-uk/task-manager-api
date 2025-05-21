import type { Task } from "../../domain/entities/task";

export interface CreateSubTaskPayload {
	title: string;
	task: number;
}

export interface CreateSubTaskDto {
	title: string;
	task: Task;
}

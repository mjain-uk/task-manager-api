import type { Task } from "../entities/task";

export interface ITaskRepository {
	findAllTask: () => Promise<Task[]>;
	findTaskById: (taskId: number) => Promise<Task | null>;
	createTask: (taskObject: Task) => Promise<Task>;
	deleteTaskById: (taskId: number) => Promise<void>;
}

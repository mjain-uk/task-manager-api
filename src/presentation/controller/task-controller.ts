import type { NextFunction, Request, Response } from "express";
import { TaskService } from "../../use-cases/tasks/task-service";

export class TaskController {
	constructor(private taskService: TaskService = new TaskService()) {}

	getAll = async (req: Request, res: Response) => {
		const tasks = await this.taskService.getAllTasks.execute();
		res.status(200).json(tasks);
	};

	getById = async (req: Request, res: Response) => {
		const taskId = req?.params?.taskId ? Number(req.params.taskId) : undefined;
		const task = await this.taskService.getById.execute(taskId);
		res.status(200).json(task);
	};

	deleteById = async (req: Request, res: Response) => {
		const taskId = req?.params?.taskId ? Number(req.params.taskId) : undefined;
		const task = await this.taskService.delete.execute(taskId);
		res.status(200).json(task);
	};
	createNew = async (req: Request, res: Response, next: NextFunction) => {
		try {
			const { title, category } = req.body;
			if (!title || !category) {
				throw new Error("Title or Category missing");
			}

			const task = await this.taskService.create.execute({ title, category });
			res.status(200).json(task);
		} catch (error) {
			next(error);
		}
	};
}

import type { NextFunction, Request, Response } from "express";
import { SubTaskService } from "../../use-cases/sub-tasks/subtask-service";

export class SubTaskController {
	constructor(private subTaskService: SubTaskService = new SubTaskService()) {}

	async createNew(req: Request, res: Response, next: NextFunction) {
		try {
			const { title, task } = req.body;
			if (!title) {
				throw new Error("Request cannot be completed. Invalid credentials");
			}

			const response = await this.subTaskService.create.execute({
				title,
				task,
			});
			res.status(201).json(response);
		} catch (error) {
			console.log(error);
			next(error);
		}
	}

	async findAll(req: Request, res: Response, next: NextFunction) {
		try {
			const response = await this.subTaskService.findAll.execute();
			res.status(200).json(response);
		} catch (error) {
			console.log(error);
			next(error);
		}
	}

	async findById(req: Request, res: Response, next: NextFunction) {
		try {
			const subTaskId = req?.params?.subTaskId;
			if (!subTaskId) {
				throw new Error("Invalid argument");
			}
			const response = await this.subTaskService.findOneById.execute(subTaskId);
			res.status(200).send(response);
		} catch (error) {
			next(error);
		}
	}

	async deleteById(req: Request, res: Response, next: NextFunction) {
		try {
			const subTaskId = req?.params?.subTaskId;
			if (!subTaskId) {
				throw new Error("Invalid argument");
			}
			const { affected } =
				await this.subTaskService.deleteOneById.execute(subTaskId);
			if (!affected || affected <= 0) {
				throw new Error("Request could not be completed");
			}
			res.status(201).send({ message: "Request successful." });
		} catch (error) {
			next(error);
		}
	}
}

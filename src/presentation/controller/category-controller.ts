import type { NextFunction, Request, Response } from "express";
import { CategoryService } from "../../use-cases/category/category-service";

export class CategoryController {
	constructor(
		private categoryService: CategoryService = new CategoryService(),
	) {}

	getAll = async (req: Request, res: Response) => {
		const categories = await this.categoryService.getAll.execute();
		res.status(200).json(categories);
	};

	getById = async (req: Request, res: Response, next: NextFunction) => {
		try {
			const catId = req?.params?.catId ? Number(req.params.catId) : undefined;

			if (!catId) {
				throw new Error("Invalid Category ID");
			}
			const category = await this.categoryService.getById.execute(catId);
			res.status(200).json(category);
		} catch (error) {
			next(error);
		}
	};

	deleteById = async (req: Request, res: Response, next: NextFunction) => {
		try {
			const catId = req?.params?.catId ? Number(req.params.catId) : undefined;

			if (!catId) {
				throw new Error("Invalid Category ID");
			}
			const category = await this.categoryService.deleteById.execute(catId);
			res.status(200).json(category);
		} catch (error) {
			next(error);
		}
	};

	createNew = async (req: Request, res: Response, next: NextFunction) => {
		try {
			const { name } = req.body;
			if (!name) {
				throw new Error("Invalid name for category.");
			}

			const task = await this.categoryService.create.execute({ name });
			res.status(200).json(task);
		} catch (error) {
			next(error);
		}
	};
}

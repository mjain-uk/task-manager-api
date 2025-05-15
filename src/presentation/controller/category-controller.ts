import type { Request, Response } from "express";
import { Category } from "../../domain/entities/category";
import { CategoryService } from "../../use-cases/category/category-service";

export class CategoryController {
	constructor(
		private categoryService: CategoryService = new CategoryService(),
	) {}

	getAll = async (req: Request, res: Response) => {
		const categories = await this.categoryService.getAll.execute();
		res.status(200).json(categories);
	};

	createNew = async (req: Request, res: Response) => {
		const { name } = req.body;
		const categoryObject = new Category();
		categoryObject.name = name;
		const task = await this.categoryService.create.execute(categoryObject);
		res.status(200).json(task);
	};
}

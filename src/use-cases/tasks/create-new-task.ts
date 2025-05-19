import type { Task } from "../../domain/entities/task";
import type { CreateTaskPayload } from "../../dtos/task/create-task-dto";
import type { BasicCrudUseCase } from "../base-crud/base-crud-use-case";
import type { GetCategoryById } from "../category/get-category-by-id";

export class CreateNewTask {
	constructor(
		private basicCrudUseCase: BasicCrudUseCase<Task>,
		private getCategoryById: GetCategoryById,
	) {}
	async execute(payload: CreateTaskPayload) {
		const { category: categoryId, title } = payload;

		// Find the Category from DB
		const categoryObject = await this.getCategoryById.execute(categoryId);

		if (!categoryObject) {
			throw new Error("Could not find Category");
		}
		const response = await this.basicCrudUseCase.create({
			title,
			category: categoryObject,
		});
		return response;
	}
}

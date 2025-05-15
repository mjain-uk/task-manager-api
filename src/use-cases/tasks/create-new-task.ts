import type { CreateTaskPayload } from "../../dtos";
import { CategoryRepository } from "../../repository/category-respository";
import type { TaskRepository } from "../../repository/task-repository";

export class CreateNewTask {
	constructor(
		private taskrepository: TaskRepository,
		private categoryRepository: CategoryRepository = new CategoryRepository(),
	) {}
	async execute(payload: CreateTaskPayload) {
		const { category: categoryId, title } = payload;

		// Find the Category from DB
		const categoryObject =
			await this.categoryRepository.findCategoryById(categoryId);

		if (!categoryObject) {
			throw new Error("Could not find Category");
		}
		const response = await this.taskrepository.createTask({
			title,
			category: categoryObject,
		});
		return response;
	}
}

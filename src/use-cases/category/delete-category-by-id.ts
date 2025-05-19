import type { CategoryRepository } from "../../repository/category-respository";

export class DeleteCategoryById {
	constructor(private categoryRepository: CategoryRepository) {}
	async execute(categoryId: number) {
		if (!categoryId) {
			throw new Error("Invalid category ID");
		}
		const response = await this.categoryRepository.deleteById(categoryId);
		return response;
	}
}

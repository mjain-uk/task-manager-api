import type { CategoryRepository } from "../../repository/category-respository";

export class GetCategoryById {
	constructor(private categoryRepository: CategoryRepository) {}
	async execute(categoryId: number) {
		if (!categoryId) {
			throw new Error("Invalid category ID");
		}
		const category = await this.categoryRepository.findCategoryById(categoryId);
		if (!category) {
			throw new Error("Category Not found");
		}
		return category;
	}
}

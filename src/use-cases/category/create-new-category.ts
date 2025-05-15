import type { Category } from "../../domain/entities/category";
import type { CategoryRepository } from "../../repository/category-respository";

export class CreateNewCategory {
	constructor(private categoryRepository: CategoryRepository) {}
	async execute(payload: Category) {
		const response = await this.categoryRepository.createCategory(payload);
		return response;
	}
}

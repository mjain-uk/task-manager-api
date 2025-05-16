import type { CreateCategoryDto } from "../../dtos/category/create-category-dto";
import type { CategoryRepository } from "../../repository/category-respository";

export class CreateNewCategory {
	constructor(private categoryRepository: CategoryRepository) {}
	async execute(payload: CreateCategoryDto) {
		try {
			const response = await this.categoryRepository.createCategory(payload);
			return response;
		} catch (error) {
			throw new Error("Could not create category");
		}
	}
}

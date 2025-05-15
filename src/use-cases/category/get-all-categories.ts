import type { CategoryRepository } from "../../repository/category-respository";

export class GetAllCategories {
	constructor(private categoryRepository: CategoryRepository) {}
	async execute() {
		return await this.categoryRepository.findAllCategory();
	}
}

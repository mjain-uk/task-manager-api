import { AppDataSource } from "../db";
import { Category } from "../domain/entities/category";
import type { ICategory } from "../domain/interfaces/category-repository";

export class CategoryRepository implements ICategory {
	constructor(
		private categoryRepository = AppDataSource.getRepository(Category),
	) {}
	async createCategory(payload: Category) {
		const object = this.categoryRepository.create(payload);
		await this.categoryRepository.save(object);
		return object;
	}

	async findAllCategory() {
		const categories = await this.categoryRepository.find({});
		return categories;
	}

	async findCategoryById(categoryId: number) {
		const category = await this.categoryRepository.findOneBy({
			id: categoryId,
		});
		return category;
	}
}

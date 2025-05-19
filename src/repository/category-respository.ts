import { AppDataSource } from "../db";
import { Category } from "../domain/entities/category";
import type { ICategory } from "../domain/interfaces/category-repository";
import type { CreateCategoryDto } from "../dtos/category/create-category-dto";

export class CategoryRepository implements ICategory {
	constructor(
		private categoryRepository = AppDataSource.getRepository(Category),
	) {}
	async createCategory(payload: CreateCategoryDto) {
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

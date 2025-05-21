import type { Category } from "../../domain/entities/category";
import type { CreateCategoryDto } from "../../dtos/category/create-category-dto";
import type { BasicCrudUseCase } from "../base-crud/base-crud-use-case";

export class CreateNewCategory {
	constructor(private basicCrudUseCase: BasicCrudUseCase<Category>) {}
	async execute(payload: CreateCategoryDto) {
		const response = this.basicCrudUseCase.create(payload);
		return response;
	}
}

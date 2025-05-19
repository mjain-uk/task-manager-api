import type { Category } from "../../domain/entities/category";
import type { BasicCrudUseCase } from "../base-crud/base-crud-use-case";

export class GetAllCategories {
	constructor(private basicCrudUseCase: BasicCrudUseCase<Category>) {}
	async execute() {
		return await this.basicCrudUseCase.findAll();
	}
}

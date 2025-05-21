import type { Category } from "../../domain/entities/category";
import type { BasicCrudUseCase } from "../base-crud/base-crud-use-case";

export class GetCategoryById {
	constructor(private basicCrudUseCase: BasicCrudUseCase<Category>) {}
	async execute(categoryId: number) {
		const category = await this.basicCrudUseCase.findOne({
			value: categoryId,
			key: "id",
		});
		return category;
	}
}

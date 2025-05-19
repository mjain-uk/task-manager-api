import type { Category } from "../../domain/entities/category";
import type { BasicCrudUseCase } from "../base-crud/base-crud-use-case";

export class DeleteCategoryById {
	constructor(private basicCrudUseCase: BasicCrudUseCase<Category>) {}
	async execute(categoryId: number) {
		const response = await this.basicCrudUseCase.deleteOne({
			value: categoryId,
			key: "id",
		});
		return response;
	}
}

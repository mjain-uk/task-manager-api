import type { Category } from "../../domain/entities/category";
import { CategoryRepository } from "../../repository/category-respository";
import { BasicCrudUseCase } from "../base-crud/base-crud-use-case";
import { CreateNewCategory } from "./create-new-category";
import { DeleteCategoryById } from "./delete-category-by-id";
import { GetAllCategories } from "./get-all-categories";
import { GetCategoryById } from "./get-category-by-id";

export class CategoryService {
	private repo = new CategoryRepository();
	private basicCrudUseCase = new BasicCrudUseCase<Category>(this.repo);

	public create = new CreateNewCategory(this.basicCrudUseCase);
	public getAll = new GetAllCategories(this.basicCrudUseCase);
	public getById = new GetCategoryById(this.basicCrudUseCase);
	public deleteById = new DeleteCategoryById(this.basicCrudUseCase);
}

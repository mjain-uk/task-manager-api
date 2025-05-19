import { CategoryRepository } from "../../repository/category-respository";
import { CreateNewCategory } from "./create-new-category";
import { DeleteCategoryById } from "./delete-category-by-id";
import { GetAllCategories } from "./get-all-categories";
import { GetCategoryById } from "./get-category-by-id";

export class CategoryService {
	private repo = new CategoryRepository();

	public create = new CreateNewCategory(this.repo);
	public getAll = new GetAllCategories(this.repo);
	public getById = new GetCategoryById(this.repo);
	public deleteById = new DeleteCategoryById(this.repo);
}

import type { Category } from "../entities/category";

export interface ICategory {
	findAllCategory: () => Promise<Category[]>;
	createCategory: (payload: Category) => Promise<Category>;
	findCategoryById: (payload: Category["id"]) => Promise<Category | null>;
	deleteById: (payload: Category["id"]) => Promise<void>;
}

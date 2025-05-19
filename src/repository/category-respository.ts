import { AppDataSource } from "../db";
import { Category } from "../domain/entities/category";
import { BaseCrudRepository } from "./base-crud-repository";

export class CategoryRepository extends BaseCrudRepository<Category> {
	constructor() {
		super(AppDataSource.getRepository(Category));
	}
}

import type { Category } from "../../domain/entities/category";

export interface CreateCategoryDto extends Omit<Category, "id" | "tasks"> {}

import type { Category } from "../domain/entities/category";

export type CreateTaskPayload = {
	title: string;
	category: number;
};

export type CreateTaskObjectDto = {
	title: string;
	category: Category;
};

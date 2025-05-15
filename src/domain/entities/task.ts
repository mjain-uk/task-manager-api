import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Category } from "./category";

@Entity("tasks")
export class Task {
	@PrimaryGeneratedColumn()
	id!: number;

	@Column({
		length: 100,
	})
	title!: string;

	@ManyToOne(
		() => Category,
		(category) => category.tasks,
	)
	category!: Category;
}

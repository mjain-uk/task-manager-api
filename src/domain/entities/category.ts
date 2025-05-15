import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Task } from "./task";

@Entity("category")
export class Category {
	@PrimaryGeneratedColumn()
	id!: number;

	@Column()
	name!: string;

	@OneToMany(
		() => Task,
		(task) => task.category,
	)
	tasks!: Task[];
}

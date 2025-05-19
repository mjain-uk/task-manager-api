import {
	Column,
	Entity,
	JoinColumn,
	OneToOne,
	PrimaryGeneratedColumn,
} from "typeorm";
import { Task } from "./task";

@Entity({ name: "sub_task" })
export class SubTask {
	@PrimaryGeneratedColumn()
	id!: number;

	@Column({ length: 255 })
	title!: string;

	@OneToOne(() => Task, { nullable: false })
	@JoinColumn({ name: "task_id" })
	task!: Task;
}

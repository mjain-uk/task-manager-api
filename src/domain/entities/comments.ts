import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

export type CommenterType = "task" | "sub-task";

@Entity()
export class Comment {
	@PrimaryGeneratedColumn()
	id!: number;

	@Column({ type: "text", nullable: false })
	content!: string;

	@Column()
	commenterType!: CommenterType;

	@Column()
	commenterId!: number;
}

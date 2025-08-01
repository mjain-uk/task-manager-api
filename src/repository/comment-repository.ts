import { AppDataSource } from "../db";
import { Comment } from "../domain/entities/comments";
import type { GetCommentsDto } from "../dtos/comment/get-comments-dto";
import { BaseCrudRepository } from "./base-crud-repository";

export class CommentRepository extends BaseCrudRepository<Comment> {
	constructor() {
		super(AppDataSource.getRepository(Comment));
	}
	async findByCommenter(payload: GetCommentsDto) {
		const response = await super.findAll({
			where: {
				commenterId: payload.commenterId,
				commenterType: payload.commenterType,
			},
		});

		return response;
	}
}

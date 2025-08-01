import type { GetCommentsDto } from "../../dtos/comment/get-comments-dto";
import type { CommentRepository } from "../../repository/comment-repository";

export class GetComments {
	constructor(private commentsRepository: CommentRepository) {}

	async execute(payload: GetCommentsDto) {
		const response = await this.commentsRepository.findByCommenter(payload);
		return response;
	}
}

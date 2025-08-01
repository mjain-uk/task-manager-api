import type { CreateCommentDto } from "../../dtos/comment/create-comment-dto";

export interface ICommentRepository {
	addComment: (payload: CreateCommentDto) => Promise<Comment>;
}

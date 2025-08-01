import type { Comment } from "../../domain/entities/comments";
import { CommentRepository } from "../../repository/comment-repository";
import { BasicCrudUseCase } from "../base-crud/base-crud-use-case";
import { CreateNewComment } from "./create-new-comment";
import { DeleteCommentById } from "./delete-comment-by-id";
import { GetComments } from "./get-all-comments";

export class CommentService {
	private commentRepo = new CommentRepository();
	private basicCrudUseCase = new BasicCrudUseCase<Comment>(this.commentRepo);

	public create = new CreateNewComment(this.basicCrudUseCase);
	public deleteById = new DeleteCommentById(this.basicCrudUseCase);
	public get = new GetComments(this.commentRepo);
}

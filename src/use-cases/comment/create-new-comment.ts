import type { Comment } from "../../domain/entities/comments";
import type { CreateCommentDto } from "../../dtos/comment/create-comment-dto";
import type { BasicCrudUseCase } from "../base-crud/base-crud-use-case";

export class CreateNewComment {
	constructor(private basicCrudUseCase: BasicCrudUseCase<Comment>) {}

	async execute(payload: CreateCommentDto) {
		const response = await this.basicCrudUseCase.create(payload);
		return response;
	}
}

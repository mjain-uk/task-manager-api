import type { Comment } from "../../domain/entities/comments";
import type { BasicCrudUseCase } from "../base-crud/base-crud-use-case";

export class DeleteCommentById {
	constructor(private basicCrudUseCase: BasicCrudUseCase<Comment>) {}

	async execute(commentId: number) {
		const response = await this.basicCrudUseCase.deleteOne({
			key: "id",
			value: commentId,
		});
		return response;
	}
}

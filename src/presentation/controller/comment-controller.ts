import type { NextFunction, Request, Response } from "express";
import { CommentService } from "../../use-cases/comment/comment-service";

export class CommentController {
	constructor(private commentService: CommentService = new CommentService()) {}

	getAllComments = async (req: Request, res: Response, next: NextFunction) => {
		try {
			const { commenterType, commenterId } = req.body;
			if (!commenterId || !commenterType) {
				throw new Error("Could not fetch comments. Invalid payload.");
			}
			const response = await this.commentService.get.execute({
				commenterId,
				commenterType,
			});
			res.status(200).json(response);
		} catch (error) {
			next(error);
		}
	};

	createNew = async (req: Request, res: Response, next: NextFunction) => {
		try {
			const { content, commenterType, commenterId } = req.body;
			if (!content || !commenterId || !commenterType) {
				throw new Error("Could not add comment. Invalid payload.");
			}
			const response = await this.commentService.create.execute({
				content,
				commenterId,
				commenterType,
			});
			res.status(201).json(response);
		} catch (error) {
			next(error);
		}
	};

	deleteOne = async (req: Request, res: Response, next: NextFunction) => {
		try {
			const { id } = req.body;
			if (!id) {
				throw new Error("Could not delete comment. Invalid payload.");
			}
			const response = await this.commentService.deleteById.execute(id);
			res.status(200).json(response);
		} catch (error) {
			next(error);
		}
	};
}

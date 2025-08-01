import { CommentController } from "../controller/comment-controller";
import { BaseRouter } from "./base-routes";

export class CommentRoutes extends BaseRouter {
	private commentController: CommentController;

	constructor() {
		super();
		this.commentController = new CommentController();
		this.commentRoutes();
	}
	private commentRoutes(): void {
		this.router.get(
			"/",
			this.commentController.getAllComments.bind(this.commentController),
		);
		this.router.post(
			"/",
			this.commentController.createNew.bind(this.commentController),
		);

		this.router.delete(
			"/",
			this.commentController.deleteOne.bind(this.commentController),
		);
	}
}

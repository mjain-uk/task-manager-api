import type { CommenterType } from "../../domain/entities/comments";

export type CreateCommentDto = {
	content: string;
	commenterType: CommenterType;
	commenterId: number;
};

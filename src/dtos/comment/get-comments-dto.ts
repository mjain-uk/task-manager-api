import type { CommenterType } from "../../domain/entities/comments";

export interface GetCommentsDto {
	commenterType: CommenterType;
	commenterId: number;
}

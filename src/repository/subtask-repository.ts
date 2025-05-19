import { AppDataSource } from "../db";
import { SubTask } from "../domain/entities/sub-task";
import { BaseCrudRepository } from "./base-crud-repository";

export class SubtaskRepository extends BaseCrudRepository<SubTask> {
	constructor() {
		super(AppDataSource.getRepository(SubTask));
	}
}

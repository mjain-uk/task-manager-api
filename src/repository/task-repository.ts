import { AppDataSource } from "../db";
import { Task } from "../domain/entities/task";
import { BaseCrudRepository } from "./base-crud-repository";

export class TaskRepository extends BaseCrudRepository<Task> {
	constructor() {
		super(AppDataSource.getRepository(Task));
	}
}

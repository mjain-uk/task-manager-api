import type { Task } from "../entities/task";
import type { IBaseCrud } from "./base-crud";

export interface ITaskRepository extends IBaseCrud<Task> {}

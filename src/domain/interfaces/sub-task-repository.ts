import type { SubTask } from "../entities/sub-task";
import type { IBaseCrud } from "./base-crud";

export interface ISubTaskRepository extends IBaseCrud<SubTask> {}

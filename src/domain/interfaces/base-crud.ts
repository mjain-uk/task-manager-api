import type {
	DeepPartial,
	DeleteResult,
	FindManyOptions,
	FindOneOptions,
} from "typeorm";

export interface FindOneWhereArgs<T> {
	key: keyof T;
	value: T[keyof T] | undefined;
	options?: FindOneOptions<T>;
}
export interface IBaseCrud<T> {
	findAll: (options?: FindManyOptions<T> | undefined) => Promise<T[]>;
	findOneWhere: ({
		key,
		value,
		options,
	}: FindOneWhereArgs<T>) => Promise<T | null>;
	createOne: (payload: DeepPartial<T>) => Promise<T>;
	deleteOneWhere: ({
		key,
		value,
	}: FindOneWhereArgs<T>) => Promise<DeleteResult>;
}

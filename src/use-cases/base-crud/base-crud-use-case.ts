import type { DeepPartial, FindManyOptions, ObjectLiteral } from "typeorm";
import type { FindOneWhereArgs } from "../../domain/interfaces/base-crud";
import type { BaseCrudRepository } from "../../repository/base-crud-repository";

export class BasicCrudUseCase<T extends ObjectLiteral> {
	constructor(private repository: BaseCrudRepository<T>) {}

	async create(payload: DeepPartial<T>) {
		const response = await this.repository.createOne(payload);
		return response;
	}

	async findAll(options?: FindManyOptions<T> | undefined) {
		const response = await this.repository.findAll(options);
		return response;
	}

	async findOne(args: FindOneWhereArgs<T>) {
		const response = await this.repository.findOneWhere(args);
		return response;
	}

	async deleteOne(args: FindOneWhereArgs<T>) {
		const response = await this.repository.deleteOneWhere(args);
		return response;
	}
}

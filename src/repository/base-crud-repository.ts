import type {
	DeepPartial,
	DeleteResult,
	FindManyOptions,
	FindOptionsWhere,
	ObjectLiteral,
	Repository,
} from "typeorm";
import type {
	FindOneWhereArgs,
	IBaseCrud,
} from "../domain/interfaces/base-crud";

export class BaseCrudRepository<T extends ObjectLiteral>
	implements IBaseCrud<T>
{
	constructor(private repository: Repository<T>) {}

	public async findAll(options?: FindManyOptions<T> | undefined) {
		try {
			const response = await this.repository.find(options);
			return response;
		} catch (error) {
			throw new Error("Could not fetch all results");
		}
	}
	public async findOneWhere({ key, value, options }: FindOneWhereArgs<T>) {
		if (!value) {
			throw new Error("Invalid arguments");
		}

		try {
			const whereClause = { [key]: value } as FindOptionsWhere<T>;
			const response = await this.repository.findOne({
				where: whereClause,
				...options,
			});
			return response;
		} catch (error) {
			throw new Error("Could not find the requested object");
		}
	}

	public async createOne(payload: DeepPartial<T>) {
		try {
			const object = this.repository.create(payload);
			const response = await this.repository.save(object);
			return response;
		} catch (error) {
			throw new Error("Could not create the requested object");
		}
	}

	public async deleteOneWhere({ key, value }: FindOneWhereArgs<T>) {
		if (!value) {
			throw new Error("Invalid arguments");
		}

		try {
			const whereClause = { [key]: value } as FindOptionsWhere<T>;
			const result: DeleteResult = await this.repository.delete(whereClause);
			return result;
		} catch (error) {
			throw new Error("Could not complete request");
		}
	}
}

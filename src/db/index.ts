import dotenv from "dotenv";
import "reflect-metadata";
import { DataSource } from "typeorm";
import { Task } from "../domain/entities/task";

dotenv.config();

export const AppDataSource = new DataSource({
	type: "mysql",
	host: process.env.DB_HOST,
	port: Number(process.env.DB_PORT) || 3306,
	username: process.env.DB_USERNAME,
	password: process.env.DB_PASSWORD,
	database: "taskmanagement",
	entities: [Task],
	synchronize: true,
	logging: false,
});

import dotenv from "dotenv";
import mysql from "mysql2";

dotenv.config();

export const connection = mysql.createConnection({
	host: process.env.DB_HOST,
	user: process.env.DB_USERNAME,
	password: process.env.DB_PASSWORD,
	database: "taskmanagement",
});

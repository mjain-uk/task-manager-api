import express from "express";
import "reflect-metadata";
import { AppDataSource } from "./db/index";

const app = express();

AppDataSource.initialize()
	.then((connection) => {
		console.log(`Connected to MySQL as ID ${connection.isInitialized}`);
	})
	.catch((error) => console.error(`Error connecting to MySQL: ${error.stack}`));

app.get("/", (req, res) => {
	res.send("Hello World!");
});

export default app;

import bodyParser from "body-parser";
import express from "express";
import "reflect-metadata";
import { AppDataSource } from "./db/index";

import { TaskRoutes } from "./presentation/routes/task-routes";

const taskRoutes = new TaskRoutes();

const app = express();
app.use(bodyParser.json());

AppDataSource.initialize()
	.then((connection) => {
		console.log(`Connected to MySQL as ID ${connection.isInitialized}`);
	})
	.catch((error) => console.error(`Error connecting to MySQL: ${error.stack}`));

app.use("/tasks", taskRoutes.router);

export default app;

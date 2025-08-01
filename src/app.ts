import bodyParser from "body-parser";
import express from "express";
import "reflect-metadata";
import { AppDataSource } from "./db/index";

import { CategoryRoutes } from "./presentation/routes/category-routes";
import { CommentRoutes } from "./presentation/routes/comment-routes";
import { SubTaskRoutes } from "./presentation/routes/sub-category-routes";
import { TaskRoutes } from "./presentation/routes/task-routes";

const taskRoutes = new TaskRoutes();
const categoryRoutes = new CategoryRoutes();
const subTaskRoutes = new SubTaskRoutes();
const commentRoutes = new CommentRoutes();

const app = express();
app.use(bodyParser.json());

AppDataSource.initialize()
	.then((connection) => {
		console.log(`Connected to MySQL as ID ${connection.isInitialized}`);
	})
	.catch((error) => console.error(`Error connecting to MySQL: ${error.stack}`));

app.use("/tasks", taskRoutes.router);
app.use("/category", categoryRoutes.router);
app.use("/sub-task", subTaskRoutes.router);
app.use("/comments", commentRoutes.router);

export default app;

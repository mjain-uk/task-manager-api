import express from "express";
import { connection } from "./db/index";
const app = express();

connection.connect((err) => {
	if (err) {
		console.error(`Error connecting to MySQL: ${err.stack}`);
		return;
	}
	console.log(`Connected to MySQL as ID ${connection.threadId}`);
});

app.get("/", (req, res) => {
	res.send("Hello World!");
});

export default app;

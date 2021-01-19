import dotenv from "dotenv";

dotenv.config({
  path: __dirname + "/.env"
});

import express, { json } from "express";
import cors from "cors";
import routes from "./routes";
import connection from "./config/database";

const app = express();

app.use(json());
app.use(cors());

app.use('/api', routes);

connection

app.listen(3000, () => {
  console.log("🚀 Server started on http://localhost:3000");
});
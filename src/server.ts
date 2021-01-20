import dotenv from "dotenv";

dotenv.config({
  path: __dirname + "/.env"
});

import express, { json } from "express";
import cors from "cors";
import routes from "./routes";

const app = express();

app.use(json());
app.use(cors());

app.get('/', (req, res) => {
  return res.send("Servidor ativo!");
});

app.use('/api', routes);

app.listen(8100, () => {
  console.log("🚀 Server started on http://localhost:8100");
});
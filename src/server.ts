import express, { json } from "express";
import cors from "cors";

const routes = require('./routes');

const app = express();
app.use(json());
app.use(cors());

app.use('/api/', routes);

app.listen(3000, () => {
  console.log("🚀 Server started on http://localhost:3000");
});
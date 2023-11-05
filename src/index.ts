import express, { Express, Response, Request } from "express";
import knex from "knex";
import { Model } from "objection";
import carRouter from "./app/Cars/CarRoute";
import errorHandler from "./middlewares/errorhandler";
import notFound from "./exceptions/404"

const uploadService = require("./helpers/UploadService");
const upload = require("./middlewares/upload")

const app: Express = express();
const port = process.env.PORT;

const knexInstance = knex({
  client: "postgresql",
  connection: {
    // connectionString: process.env.DB_URL,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASS
  },
});

Model.knex(knexInstance);

app.use(express.json());

app.use("/api/v1", carRouter);
app.post("/api/v1/photo/upload", upload.single("picture"), uploadService);

app.use(notFound);

app.use(errorHandler);

app.listen(port, (): void => {
  console.log(`Server running on port ${port}`);
});

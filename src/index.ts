import express, { Express, Response, Request } from "express";
import knex, { Knex } from "knex";
import { Model } from "objection";
import carRouter from "./app/Cars/CarRoute";
import errorhandler from "./middlewares/errorhandler";
import notFound from "./exceptions/404"
import knexInstance from "./config/KnexInstance";
import carBrandRouter from "./app/CarBrands/CarBrandRoute";
import carTypeRouter from "./app/CarTypes/CarTypeRoute";
import carTransmissionRouter from "./app/CarTransamissions/CarTransmissionRoute";

const uploadService = require("./helpers/UploadService");
const upload = require("./middlewares/upload")

const app: Express = express();
const port = process.env.PORT;

const newKnex = knex(knexInstance);

Model.knex(newKnex);

app.use(express.json());

// ########################### Routing ###################################
app.use("/api/v1", carRouter);
app.use("/api/v1", carBrandRouter);
app.use("/api/v1", carTypeRouter);
app.use("/api/v1",  carTransmissionRouter);
app.post("/api/v1/photo/upload", upload.single("picture"), uploadService);
// ========================================================================

// ################## Handle Error ###################
app.use(notFound);
app.use(errorhandler);
// ==================================================

app.listen(port, (): void => {
  console.log(`Server running on port ${port}`);
});

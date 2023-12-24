import express, { Express, Response } from "express";
import knex from "knex";
import { Model } from "objection";
import carRouter from "./src/routes/CarRoute";
import errorhandler from "./src/middlewares/errorhandler";
import notFound from "./src/exceptions/404";
import knexInstance from "./src/config/KnexInstance";
import carBrandRouter from "./src/routes/CarBrandRoute";
import carTypeRouter from "./src/routes/CarTypeRoute";
import carTransmissionRouter from "./src/routes/CarTransmissionRoute";
import authRouter from "./src/routes/AuthRoute";
import { authenticateUser, authorizedSuperAdminAndAdmin } from "./src/middlewares/AuthMiddleware";
import carLogRoute from "./src/routes/CarLogRoute";
import swaggerUi from "swagger-ui-express";
// import uploadService from "./src/services/UploadService";
// eslint-disable-next-line @typescript-eslint/no-var-requires
const YAML = require("yamljs");
import cors from "cors";
import carRouterNoAuth from "./src/routes/CarRouterNoAuth";

// eslint-disable-next-line @typescript-eslint/no-var-requires
const uploadService = require("./src/services/UploadService");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const upload = require("./src/middlewares/upload");

export const app: Express = express();
const swaggerDocument = YAML.load("./openAPI.yaml");
const port = process.env.PORT;

const newKnex = knex(knexInstance);
Model.knex(newKnex);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ########################### Routing ###################################
app.get("/", (_, res: Response) => {
	res.send("Binar Car API");
});

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use("/api/v1", authRouter);
app.use("/api/v1", carRouterNoAuth);
app.use("/api/v1",authorizedSuperAdminAndAdmin, carBrandRouter);
app.use("/api/v1", authorizedSuperAdminAndAdmin, carRouter);
app.use("/api/v1", authorizedSuperAdminAndAdmin, carTypeRouter);
app.use("/api/v1", authorizedSuperAdminAndAdmin, carTransmissionRouter);
app.use("/api/v1", authorizedSuperAdminAndAdmin, carLogRoute);
app.post("/api/v1/photo/upload", authenticateUser, upload.single("picture"), uploadService);
// ========================================================================

// ################## Handle Error ###################
app.use(notFound);
app.use(errorhandler);
// ==================================================

app.listen(port, (): void => {
	console.log(`Server running on port ${port}`);
});

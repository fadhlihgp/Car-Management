import express, { Express } from "express";
import knex from "knex";
import { Model } from "objection";
import carRouter from "./routes/CarRoute";
import errorhandler from "./middlewares/errorhandler";
import notFound from "./exceptions/404";
import knexInstance from "./config/KnexInstance";
import carBrandRouter from "./routes/CarBrandRoute";
import carTypeRouter from "./routes/CarTypeRoute";
import carTransmissionRouter from "./routes/CarTransmissionRoute";
import authRouter from "./routes/AuthRoute";
import { authenticateUser, authorizedSuperAdminAndAdmin } from "./middlewares/AuthMiddleware";
import carLogRoute from "./routes/CarLogRoute";
import swaggerUi from "swagger-ui-express";
// eslint-disable-next-line @typescript-eslint/no-var-requires
const YAML = require("yamljs");
import cors from "cors";
import carRouterNoAuth from "./routes/CarRouterNoAuth";

// eslint-disable-next-line @typescript-eslint/no-var-requires
const uploadService = require("./services/UploadService");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const upload = require("./middlewares/upload");

export const app: Express = express();
const swaggerDocument = YAML.load("./openAPI.yaml");
const port = process.env.PORT;

const newKnex = knex(knexInstance);
Model.knex(newKnex);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ########################### Routing ###################################
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

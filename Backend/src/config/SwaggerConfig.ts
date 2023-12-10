import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
// @ts-ignore
import path from "path";
import {Express} from "express";

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Car Management API',
            version: '1.0.0',
            description: 'Deskripsi API Anda',
        },
        servers: [
            {
                url: 'http://localhost:7000',
            },
        ],
    },
    apis: [path.join(__dirname, "../routes/*.ts")]
};

const specs = swaggerJsdoc(options);

export const swaggerSetup = (app: Express) => {
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
};

import { Request, Response } from "express";
const cloudinary = require("cloudinary").v2;
const Cryptr = require('cryptr');
const cryptr = new Cryptr('myTotallySecretKey');

cloudinary.config({
  cloud_name: cryptr.decrypt(process.env.CLOUD_NAME_ENC),
  api_key: cryptr.decrypt(process.env.CLOUD_KEY_ENC),
  api_secret: cryptr.decrypt(process.env.CLOUD_SECRET_ENC),
  secure: true,
});

const uploadService = (req: Request, res: Response) => {
  const fileBase64 = req.file?.buffer.toString("base64");
  const file = `data:${req.file?.mimetype};base64,${fileBase64}`;

  cloudinary.uploader.upload(file, (err: Error, result: any) => {
    if (!!err) {
      return res.status(400).json({
        message: err.message,
      });
    }

    res.status(201).json({
      message: "Upload success",
      url: result.url,
    });
  });
};

module.exports = uploadService;

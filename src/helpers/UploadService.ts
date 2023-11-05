import { Request, Response } from "express";
const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_KEY,
  api_secret: process.env.CLOUD_SECRET,
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

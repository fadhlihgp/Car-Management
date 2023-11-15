import { Request, Response, NextFunction } from "express";
import { JwtHandler } from "../security/JwtHandler";

const jwt = new JwtHandler();
export const authenticateUser = async (req: Request, res: Response, next: NextFunction) => {
  // const token = req.header('Authorization')?.replace('Bearer ', '');

  // if (!token) {
  //   return res.status(401).json({ message: 'Unauthorized' });
  // }

  try {
    jwt.getTokenValue(req);
    next();
  } catch (error) {
    next(error);
  }
};

import { Request, Response, NextFunction } from "express";
import { NotFoundException } from "../exceptions/NotFoundException";

function errorhandler(err:Error, _req: Request, res: Response, _next: NextFunction) {
  if (err instanceof NotFoundException) {
    res.status(404).json({ message: err.message });
  } else {
    res.status(500).json({ message: err.message });
  }
}

export default errorhandler;

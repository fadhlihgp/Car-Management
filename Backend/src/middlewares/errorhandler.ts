/* eslint-disable @typescript-eslint/no-unused-vars */
import { Request, Response, NextFunction } from "express";
import { BadRequestException } from "../exceptions/BadRequestException";
import { NotFoundException } from "../exceptions/NotFoundException";
import { UnauthorizedException } from "../exceptions/UnauthorizedException";

function errorhandler(err: Error, _req: Request, res: Response, _next: NextFunction) {
	if (err instanceof NotFoundException) {
		res.status(404).json({ message: err.message });
	} else if (err instanceof BadRequestException) {
		res.status(400).json({ message: err.message });
	} else if (err instanceof UnauthorizedException) {
		res.status(401).json({ message: err.message });
	} else {
		res.status(500).json({ message: err.message });
	}
  
}

export default errorhandler;

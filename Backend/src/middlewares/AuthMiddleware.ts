import { Request, Response, NextFunction } from "express";
import { JwtHandler } from "../security/JwtHandler";
import {UnauthorizedException} from "../exceptions/UnauthorizedException";

const jwt = new JwtHandler();
export const authenticateUser = async (req: Request, res: Response, next: NextFunction) => {
	try {
		jwt.getTokenValue(req);
		next();
	} catch (error) {
		next(error);
	}
};

export const authorizedSuperAdminAndAdmin = async (req: Request, res: Response, _next:NextFunction) => {
	try {
		const valueJwt = jwt.getTokenValue(req);
		if (valueJwt.RoleId !== "3") {
			_next();
		} else {
			throw new UnauthorizedException("Access denied");
		}
	} catch (error) {
		_next(error);
	}
};

export const authorizedSuperAdmin = async (req: Request, res: Response, _next:NextFunction) => {
	try {
		const valueJwt = jwt.getTokenValue(req);
		if (valueJwt.RoleId === "1") {
			_next();
		} else {
			throw new UnauthorizedException("Access denied");
		}
	} catch (error) {
		_next(error);
	}
};

export const authorizedAdmin = async (req: Request, res: Response, _next:NextFunction) => {
	try {
		const valueJwt = jwt.getTokenValue(req);
		if (valueJwt.RoleId === "2") {
			_next();
		} else {
			throw new UnauthorizedException("Access denied");
		}
	} catch (error) {
		_next(error);
	}
};

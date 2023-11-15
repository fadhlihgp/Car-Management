import { Request, Response, NextFunction } from "express";
import { AuthService } from "./AuthService";
import { LoginReqDto, RegisterReqDto } from "./AuthDto";
import { JwtHandler } from "../../security/JwtHandler";

const authService = new AuthService();
const jwtHandler = new JwtHandler();
export class AuthController {
  async login(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const loginReq: LoginReqDto = req.body;
      const result = await authService.login(loginReq);
      res.status(200).json({
        message: "Berhasil login",
        data: result,
      });
    } catch (error) {
      next(error);
    }
  }

  async registerCustomer(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const registerReq: RegisterReqDto = req.body;
      const result = await authService.registerCustomer(registerReq);
      res.status(201).json({
        message: "Berhasil registrasi customer",
        data: result,
      });
    } catch (error) {
      next(error);
    }
  }

  async registerAdmin(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const registerReq: RegisterReqDto = req.body;
      const result = await authService.registerAdmin(registerReq, jwtHandler.getTokenValue(req).RoleId);
      res.status(201).json({
        message: "Berhasil membuat akun admin",
        data: result,
      });
    } catch (error) {
      next(error);
    }
  }

  async getCurrentUser(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const currUser = await authService.getCurrentUser(jwtHandler.getTokenValue(req).AccountId);
      res.status(200).json({
        message: "Berhasil mendapatkan data user",
        data: currUser,
      });
    } catch (error) {
      next(error);
    }
  }

  async authorized(req: Request, next: NextFunction): Promise<void> {
    try {
        jwtHandler.getTokenValue(req);
    } catch (error) {
        next(next)
    }
  }
}

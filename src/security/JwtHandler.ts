import { Account, AccountModel } from "../app/Auth/AccountModel";
import jwt, { JwtPayload, SignOptions } from "jsonwebtoken";
import { Request } from "express";
import { UnauthorizedException } from "../exceptions/UnauthorizedException";

export interface TokenPayload {
  Email: string,
  UserName: string,
  Role: string,
  RoleId: string,
  AccountId: string
}

export class JwtHandler {
  private secretKey = process.env.SECRET_KEY || "secret";
  public generateToken(account: Account): string {
    const payload = {
      Email: account.email,
      UserName: account.username,
      Role: account.role?.name,
      RoleId: account.roleId,
      AccountId: account.id,
    };

    const options: SignOptions = {
      algorithm: "HS256",
      expiresIn: "24h",
      issuer: "Fadhlih"
    };

    const token = jwt.sign(payload, this.secretKey, options);

    return token;
  }

  public getTokenValue(req: Request): TokenPayload {
    const bearerToken = req.headers.authorization;
    // const bearerToken = req.cookies.authorization;
    if (!bearerToken) throw new UnauthorizedException("Anda belum login, silahkan login terlebih dahulu!");
    const token = bearerToken.split("Bearer ")[1];
    const tokenPayload = jwt.verify(token, this.secretKey) as TokenPayload;
    return tokenPayload;
  }
}

export default JwtHandler;
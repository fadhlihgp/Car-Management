import { JwtHandler } from "../../security/JwtHandler";
import { UnauthorizedException } from "../../exceptions/UnauthorizedException";
import { Repository } from "../Repositories/Repository";
import { AccountModel } from "./AccountModel";
import bcrypt from "bcrypt";
import { LoginReqDto, LoginResDto, RegisterReqDto } from "./AuthDto";
import { RoleModel } from "./RoleModel";
import executeTransactionAsync from "../Repositories/ExecuteTransactionAsync";
const { v4: uuidv4 } = require("uuid");
import { Request } from "express";
import { parsingTime } from "../../helpers/ParsingTime";

export class AuthService {
  private accountRepo: Repository<AccountModel>;
  private roleRepo: Repository<RoleModel>;
  private jwtHandler: JwtHandler;

  constructor() {
    this.accountRepo = new Repository(AccountModel);
    this.roleRepo = new Repository(RoleModel);
    this.jwtHandler = new JwtHandler();
  }

  async login(loginReq: LoginReqDto): Promise<LoginResDto> {
    const findUser = await this.accountRepo.findOr({ email: loginReq.email }, { username: loginReq.email });
    if (!findUser) throw new UnauthorizedException("Email atau password salah");

    // TODO: hash password and compare with stored one
    const isPasswordValid = bcrypt.compareSync(loginReq.password, findUser.password);
    if (!isPasswordValid) throw new UnauthorizedException("Email atau password salah");

    const findRole = await this.roleRepo.findById(findUser.roleId);
    findUser.role = findRole;

    const token = this.jwtHandler.generateToken(findUser);
    const loginResponse: LoginResDto = {
      email: findUser.email,
      role: findRole?.name || "",
      token: token,
    };

    return loginResponse;
  }

  async registerCustomer(registerDto: RegisterReqDto): Promise<AccountModel> {
    if (await this.accountRepo.find({ email: registerDto.email }))
      throw new UnauthorizedException("Email sudah terdaftar!");
    if (await this.accountRepo.find({ username: registerDto.username }))
      throw new UnauthorizedException("Username sudah digunakan!");

    const accountSave: Partial<AccountModel> = {
      id: uuidv4(),
      fullName: registerDto.fullName,
      address: registerDto.address,
      phone: registerDto.phone,
      birthDate: parsingTime(registerDto.birthDate),
      createdAt: parsingTime(new Date()),
      username: registerDto.username,
      email: registerDto.email,
      password: await bcrypt.hash(registerDto.password, 8),
      pictureUrl: registerDto.pictureUrl,
      roleId: "3",
    };

    return await executeTransactionAsync(async () => {
      const account =  await this.accountRepo.save(accountSave);
      account.password = "-";
      return account;
    });
  }

  async registerAdmin(registerDto: RegisterReqDto, roleId: string): Promise<AccountModel> {

    if (roleId !== "1") throw new UnauthorizedException("Akses ditolak");
    if (await this.accountRepo.find({ email: registerDto.email }))
      throw new UnauthorizedException("Email sudah terdaftar!");
    if (await this.accountRepo.find({ username: registerDto.username }))
      throw new UnauthorizedException("Username sudah digunakan!");

    const accountSave: Partial<AccountModel> = {
      id: uuidv4(),
      fullName: registerDto.fullName,
      address: registerDto.address,
      phone: registerDto.phone,
      birthDate: parsingTime(registerDto.birthDate),
      createdAt: parsingTime(new Date()),
      username: registerDto.username,
      email: registerDto.email,
      password: await bcrypt.hash(registerDto.password, 8),
      pictureUrl: registerDto.pictureUrl,
      roleId: "2",
    };

    return await executeTransactionAsync(async () => {
      const account =  await this.accountRepo.save(accountSave);
      account.password = "-";
      return account;
    });
  }

  async getCurrentUser(accountId: string): Promise<AccountModel> {
    // const tokenPayload = this.jwtHandler.getTokenValue(req);
    const result = await this.accountRepo.findById(accountId);
    if (!result) throw new UnauthorizedException("User tidak ditemukan");
    result.password = "-";
    return result;
  }
}

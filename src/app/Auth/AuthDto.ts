export interface LoginReqDto {
    email: string,
    password: string
}

export interface LoginResDto {
    email: string,
    role: string,
    token: string
}

export interface RegisterReqDto {
    fullName: string,
    address: string,
    phone: string,
    birthDate: Date,
    username: string,
    email: string,
    password: string,
    pictureUrl: string,
}

// id!: string;
//   fullName!: string;
//   address!: string;
//   phone!: string;
//   birthDate?: Date;
//   username!: string;
//   email!: string;
//   password!: string;
//   pictureUrl?: string;
//   roleId!: string;
//   role?: RoleModel | null;
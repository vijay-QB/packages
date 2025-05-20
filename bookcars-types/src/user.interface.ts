import mongoose, { Document } from 'mongoose';


export enum UserRole {
  ADMIN = 'admin',
  USER = 'user',
  SUPPLIER = 'supplier',
}

export enum UserStatus {
  ACTIVE = 'active',
  INACTIVE = 'inactive',
  PENDING = 'pending',
}

export interface User  {
  _id? : mongoose.Types.ObjectId |string;
  fullName: string;
  email: string;
  password: string;
  phone: string;
  dob: string;
  role: UserRole;
  status: UserStatus;
  language: string;
  refreshToken? : string
}


    
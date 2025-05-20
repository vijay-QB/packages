import mongoose from "mongoose";

export interface OtpDocument extends Document {
  email: string; // email or phone
  otp: string;
  expiresAt: Date;
  verified: boolean;
  createdAt: Date;
  updatedAt: Date;
}
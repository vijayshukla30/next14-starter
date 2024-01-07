import mongoose from "mongoose";
const { Schema } = mongoose;

export const Role = Object.freeze({
  ROLE_ADMIN: "ROLE_ADMIN",
  ROLE_USER: "ROLE_USER",
});

const UserSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      min: 3,
      max: 12,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      max: 50,
    },
    password: {
      type: String,
      required: true,
      min: 3,
      max: 12,
    },
    role: {
      type: String,
      enum: [Role.ROLE_USER, Role.ROLE_ADMIN],
      default: Role.ROLE_USER,
    },
    avatar: {
      type: String,
    },
    firstName: {
      type: String,
      required: true,
      min: 3,
      max: 20,
    },
    lastName: {
      type: String,
      required: true,
      min: 3,
      max: 20,
    },
  },
  { timestamps: true }
);
export const User = mongoose.model("User", UserSchema);

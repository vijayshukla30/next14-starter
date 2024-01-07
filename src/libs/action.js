"use server";
import bcrypt from "bcrypt";
import { signIn, signOut } from "./auth";
import connectDB from "./dbConfig";
import { Role, User } from "./models/user";

export const handleGithubLogin = async () => {
  await signIn("github");
};
export const handleLogout = async () => {
  await signOut();
};

export const register = async (previousState, formData) => {
  const { username, email, password, repeatPassword, avatar } =
    Object.fromEntries(formData);

  try {
    connectDB();
    console.log("Matching password");
    if (password !== repeatPassword) {
      return { error: "Password didn't match." };
    }
    console.log("Finding user");
    const user = await User.find({ $or: [{ username }, { email }] });
    console.log("user", user);
    if (user && user.length > 0) {
      return { error: "User with this username/email already exists." };
    }
    console.log("Hashing Password");
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);
    console.log("Saving User");
    const newUser = new User({
      username: username,
      email,
      password: hashPassword,
      avatar,
      role: Role.ROLE_USER,
    });
    await newUser.save();
    return { success: true };
  } catch (error) {
    console.log("error", error);
    return { error: "Something went wrong." };
  }
};
export const login = async (previousState, formData) => {
  const { username, password } = Object.fromEntries(formData);
  try {
    await signIn("credentials", { username, password });
  } catch (error) {
    if (error.message.includes("CredentialsSignin".toLowerCase())) {
      return { error: "Invalid username or password " };
    }
    throw error;
  }
};

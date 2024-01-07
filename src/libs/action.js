"use server";
import bcrypt from "bcrypt";
import { signIn, signOut } from "./auth";
import connectDB from "./dbConfig";
import { User } from "./models/user";

export const handleGithubLogin = async () => {
  await signIn("github");
};
export const handleLogout = async () => {
  await signOut();
};

export const register = async (formData) => {
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
    });
    await newUser.save();
  } catch (error) {
    console.log("error", error);
    return { error: "Something went wrong." };
  }
};

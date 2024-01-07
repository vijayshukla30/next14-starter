import { signIn } from "./auth";

export const handleGithubLogin = async () => {
  "use server";
  await signIn("github");
};

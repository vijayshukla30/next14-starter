import { auth, signIn } from "@/libs/auth";
import React from "react";

const Login = async () => {
  const session = await auth();
  console.log("session", session);
  const handleGithubLogin = async () => {
    "use server";
    await signIn("github");
  };

  return (
    <div>
      <form action={handleGithubLogin}>
        <button>Login with Github</button>
      </form>
    </div>
  );
};

export default Login;

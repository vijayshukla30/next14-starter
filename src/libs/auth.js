import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import connectDB from "./dbConfig";
import { Role, User } from "./models/user";
const GITHUB_ID = process.env.GITHUB_ID;
const GITHUB_SECRET = process.env.GITHUB_SECRET;
export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  providers: [GitHub({ clientId: GITHUB_ID, clientSecret: GITHUB_SECRET })],
  callbacks: {
    async signIn({ account, profile }) {
      if (account.provider === "github") {
        connectDB();
        try {
          const user = await User.findOne({ username: profile.login });
          console.log("user", user);
          if (!user) {
            const newUser = new User({
              username: profile.login,
              email: profile.email,
              name: profile.name,
              avatar: profile.avatar_url,
              role: Role.ROLE_USER,
              password: "1234567",
            });
            console.log("Saving User Record");
            await newUser.save();
          }
        } catch (error) {
          console.log("error", error);
          return false;
        }
      }
      return true;
    },
  },
});

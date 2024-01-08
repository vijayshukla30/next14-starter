import { Role } from "./models/user";

export const authConfig = {
  pages: {
    signIn: "/login",
  },
  providers: [],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id;
        session.user.role = token.role;
      }

      return session;
    },
    authorized({ auth, request }) {
      console.log("auth", auth);
      const user = auth?.user;
      const nextUrl = request.nextUrl?.pathname;
      const isOnAdminPage = nextUrl?.startsWith("/admin");
      const isOnBlogPage = nextUrl?.startsWith("/blog");
      const isOnLoginPage = nextUrl?.startsWith("/login");
      const isOnRegisterPage = nextUrl?.startsWith("/register");
      const isAdmin = user?.role === Role.ROLE_ADMIN;

      if (isOnAdminPage && !isAdmin) {
        return false;
      }
      if (isOnBlogPage && !user) {
        return false;
      }

      if ((isOnLoginPage || isOnRegisterPage) && user) {
        return Response.redirect(new URL("/", request.nextUrl));
      }
      return true;
    },
  },
};

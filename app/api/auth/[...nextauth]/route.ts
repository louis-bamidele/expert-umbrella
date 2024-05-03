import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { connectToDB } from "../../../../utils/database";
import Lecturer from "../../../../models/lecturer";
import { z } from "zod";
const handler = NextAuth({
  session: {
    strategy: "jwt",
  },

  pages: {
    signIn: "/",
  },

  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: "Credentials",
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        username: {},
        password: {},
      },
      async authorize(credentials, req) {
        const sessionUser = await Lecturer.findOne({
          username: credentials?.username,
        });

        if (credentials?.password == sessionUser.password) {
          return sessionUser;
        }

        console.log("credentials", credentials);
        return null;
      },
    }),
  ],
});

export { handler as GET, handler as POST };

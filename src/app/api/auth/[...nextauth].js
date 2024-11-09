import NextAuth from "next-auth";
import Providers from "next-auth/providers";

export default NextAuth({
  providers: [
    Providers.Credentials({
      async authorize(credentials) {
        const user = { id: 1, name: "Admin", email: "admin@example.com" }; // Contoh user statis

        if (user) {
          return user;
        } else {
          throw new Error("Invalid credentials");
        }
      },
    }),
  ],
  callbacks: {
    async session(session, user) {
      session.user = user;
      return session;
    },
  },
});

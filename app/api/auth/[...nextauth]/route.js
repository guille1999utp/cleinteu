import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "email", type: "email", placeholder: "test@test.com" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try{
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/user/login`,
          {
            method: "POST",
            body: JSON.stringify({
              email: credentials?.email,
              password: credentials?.password,
            }),
            headers: { "Content-Type": "application/json" },
          }
        );

        const data = await res.json();

        if (!data.ok) {
          throw new Error(
            data.msg || "Error desconocido al iniciar sesión"
          );
        }

        const user = data.user;
        const token = data.token;

        if (res.ok && data) {
          return { ...user, token };
        }

        return null;
        }catch(error){

        throw new Error(error.message || "Error al conectarse al servidor");
        
        }
        
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.user = user;
      }
      return token;
    },
    async session({ session, token }) {
      if (token.user) {
        session.user = token.user;
      }
      return session;
    },
  },
  pages: {
    signIn: "/login",
    // error: "/auth/error",
  },
});

export { handler as GET, handler as POST };

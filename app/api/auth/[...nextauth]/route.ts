import User from "@/models/user";
import NextAuth, { Session } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { connectToDB } from "@/utils/database";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
  ],
  callbacks: {
    async session({ session }: { session: any }) {
      try {
        await connectToDB();
        const sessionUser = await User.findOne({ email: session?.user?.email });
        session.user.id = sessionUser?._id.toString();
        return session;
      } catch (error) {
        console.log("Error in session callback:", error);
        return session;
      }
    },
    async signIn({ profile }) {
      try {
        await connectToDB();

        // Check if user exists
        const userExists = await User.findOne({ email: profile?.email });

        // If not, create a new user
        if (!userExists) {
          await User.create({
            email: profile?.email,
            username: profile?.name?.replace(" ", "").toLowerCase(),
            image: profile?.image,
          });
        }

        return true;
      } catch (error) {
        console.log("Error checking if user exists: ", error);
        return false;
      }
    },
  },
});

export { handler as GET, handler as POST };

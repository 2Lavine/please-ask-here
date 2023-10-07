import GithubProvider from 'next-auth/providers/github';
// import GoogleProvider from "next-auth/providers/google";

import { getServerSession } from 'next-auth';

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
};

export const getAuthSession = () => getServerSession(authOptions);

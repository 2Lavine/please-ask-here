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
  secret: '6xoACylHcNkc16QtddBOZxWRSpjfvqZdzbPDPrqogDk=',
};

export const getAuthSession = () => getServerSession(authOptions);

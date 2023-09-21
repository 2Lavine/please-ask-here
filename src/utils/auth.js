import GithubProvider from 'next-auth/providers/github';
// import GoogleProvider from "next-auth/providers/google";

import { getServerSession } from 'next-auth';

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: 'aa32b554eac76e1fe6c7',
      clientSecret: 'c834bead56ef6c50695550b1ae6f8eb6116cb3af'
    }),
  ],
};

export const getAuthSession = () => getServerSession(authOptions);

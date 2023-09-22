'use client';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
const LoginPage = () => {
  const { status } = useSession();
  const router = useRouter();

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'authenticated') {
    // send message to backend
    // return <div>{session.user.toString()}</div>;
    // router.push('/');
  }

  return (
    <div>
      <div>
        <Link href="/login/email">Sign in with Email</Link>
      </div>
      <div>
        <div>Sign in with Google</div>
        <div onClick={() => signIn('github')}>Sign in with Github</div>
        <div>Sign in with Facebook</div>
      </div>
    </div>
  );
};

export default LoginPage;

'use client';
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import { PAHButton } from './PAHButton';
export default function LogInOutButton() {
  const userSignOut = () => {
    localStorage.removeItem('user');
    signOut();
  };
  const { status } = useSession();
  if (status === 'authenticated') {
    return (
      <div className="cursor-pointer text-white" onClick={userSignOut}>
        <PAHButton
          rontColor="bg-black"
          backColor="bg-white-500"
          width="w-44"
          textColor="text-white"
        >
          Logout
        </PAHButton>
      </div>
    );
  }
  if (status === 'loading') {
    return <div>Loading...</div>;
  }
  return (
    <Link href="/login">
      <PAHButton
        frontColor="bg-black"
        backColor="bg-white-500"
        width="w-44"
        textColor="text-white"
      >
        Login
      </PAHButton>
    </Link>
  );
}

'use client';
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import { PAHButton } from './PAHButton';
export default function LogInOutButton() {
  const { status, data } = useSession();
  if (status === 'authenticated') {
    localStorage.setItem('user', JSON.stringify(data));
    return (
      <div className="cursor-pointer text-white" onClick={() => signOut()}>
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

'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function EmailLogin() {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const router = useRouter();

  const loginByPassword = async () => {
    console.log('loginByPassword');
    const res = await fetch('/api/auth/pwd-login', {
      method: 'POST',
      body: JSON.stringify({ password, email, type: 'email' }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const body = await res.json();
    console.log(body, 'helo');
    const { success } = body.data;
    if (success) {
      router.push('/');
    }
    // }
  };

  return (
    <div className="relative flex flex-col items-center p-4">
      <Link className="absolute self-start" href={'/login'}>
        返回
      </Link>
      <h1 className="text-lg">Email Login</h1>
      <div className="text-sm m-6">
        Enter your email first to receive verification code and continue to fill
        it in below
      </div>
      <label className="self-start">Email</label>
      <input
        className="border border-gray-300 rounded-lg p-2 m-2 w-full"
        onChange={(e) => setEmail(e.target.value)}
        type="text"
      />

      <label className="self-start">Password</label>
      <input
        className="border border-gray-300 rounded-lg p-2 m-2 w-full"
        onChange={(e) => setPassword(e.target.value)}
        type="password"
      />
      <button onClick={async () => await loginByPassword()}>Sign in</button>
    </div>
  );
}

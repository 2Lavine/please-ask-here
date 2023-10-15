'use client';
import { LoginContext } from '@/utils/LoginContext';
import { EmailLogin, ThirdPartyStrategy } from '@/utils/LoginStrategies';
import { SIGNIN } from '@/utils/url';
import { ErrorMessage } from '@hookform/error-message';
import { Divider } from '@nextui-org/react';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

const LoginPage = () => {
  const { status, data } = useSession();
  const router = useRouter();
  const [user, setUser] = useState(null);
  const thirdPartyStrategy = new ThirdPartyStrategy();
  const emailStrategy = new EmailLogin();
  const loginContext = new LoginContext(thirdPartyStrategy);
  // get local storage on load
  useEffect(() => {
    const curUser = localStorage.getItem('user');
    console.log(curUser, 'get user on login');
    setUser(JSON.parse(curUser));
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  if (status === 'loading') {
    return <div>Loading...</div>;
  }
  if (status === 'authenticated' || user) {
    const githubData = data;
    console.log('signIN', SIGNIN);
    fetch(SIGNIN, {
      method: 'POST',
      body: JSON.stringify({ type: 'email' }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        localStorage.setItem('user', JSON.stringify(githubData));
        console.log(data);
        console.log(githubData);
      });
    router.push('/');
  }
  const signInByEmail = async (data) => {
    // console.log('signIN', SIGNIN, data);
    // const { password, email } = data;
    // const res = await fetch(SIGNIN, {
    //   method: 'POST',
    //   body: JSON.stringify({ password, email, type: 'email' }),
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    // });
    // const body = await res.json();
    loginContext.setStrategy(emailStrategy);
    const body = await loginContext.login(data);
    const { success } = body.data;
    if (success) {
      router.push('/');
      localStorage.setItem('user', JSON.stringify(body.data));
    }
    router.push('/');
  };
  return (
    <section className="block">
      <div className="py-16 md:py-24 lg:py-32">
        <div className="mx-auto bg-[#f2f2f7] w-full max-w-3xl px-5 md:px-10 pt-[3em] pb-12">
          <div className="text-center">
            <h2 className="font-bold text-3xl md:text-5xl">
              Start 14-day free trial
            </h2>
            <div className="mx-auto mt-4 max-w-[528px] mb-5 md:mb-6 lg:mb-8">
              <p className="text-[#647084]">
                Lorem ipsum dolor sit amet consectetur adipiscing elit ut
                aliquam,purus sit amet luctus magna fringilla urna
              </p>
            </div>
            <div className="mx-auto w-full max-w-[400px]">
              <div
                onClick={() => {
                  loginContext.setStrategy(thirdPartyStrategy);
                  loginContext.login({ type: 'github' });
                }}
                className="flex cursor-pointer max-w-full grid-cols-2 flex-row items-center justify-center bg-[#276ef1] py-4 text-center font-semibold text-white transition [box-shadow:rgb(171,_196,_245)_-8px_8px] hover:[box-shadow:rgb(171,_196,_245)_0px_0px] px-8"
              >
                <p className="font-bold">Sign up with Github</p>
              </div>
              <div className="mb-14 mt-14 flex w-full flex-row items-center">
                <Divider orientation="horizontal" className="flex-1" />
                <div className="text-sm flex-none w-40 text-[#647084]">
                  or sign up with email
                </div>
                <Divider orientation="horizontal" className="flex-1" />
              </div>

              <div className="mx-auto max-w-[400px] mb-4 pb-4">
                <form name="wf-form-password" method="get">
                  <ErrorMessage
                    errors={errors}
                    name="email"
                    render={({ message }) => (
                      <p className="text-red-500">{message}</p>
                    )}
                  />
                  <div className="relative">
                    <span className="i-iconamoon-email text-3xl absolute bottom-0 left-[3%] right-auto top-[20%] inline-block" />
                    <input
                      type="email"
                      className="m-0 mb-4 block w-full border border-black bg-white align-middle text-[#333333] focus:border-[#3898ec] text-sm px-3 h-9 py-6 pl-14"
                      name="name-2"
                      placeholder="Email Address"
                      {...register('email', {
                        required: 'Please input your email',
                        pattern: {
                          value: /\S+@\S+\.\S+/,
                          message: 'Entered value does not match email format',
                        },
                      })}
                    />
                  </div>
                  <ErrorMessage
                    errors={errors}
                    name="password"
                    render={({ message }) => (
                      <p className="text-red-500">{message}</p>
                    )}
                  />
                  <div className="relative mb-4 pb-2">
                    <span className="i-carbon-password text-3xl absolute bottom-0 left-[3%] right-auto top-[15%] inline-block" />
                    <input
                      type="password"
                      className="m-0 mb-4 block w-full border border-black bg-white align-middle text-[#333333] focus:border-[#3898ec] text-sm px-3 h-9 py-6 pl-14"
                      name="password-3"
                      placeholder="Password (min 8 characters)"
                      {...register('password', {
                        required: 'Please input your password',
                        minLength: {
                          value: 8,
                          message: 'Password must be at least 8 characters',
                        },
                      })}
                    />
                  </div>
                  <Link
                    href=""
                    className="flex max-w-full grid-cols-2 flex-row items-center justify-center bg-[#276ef1] py-4 text-center font-semibold text-white transition [box-shadow:rgb(171,_196,_245)_-8px_8px] hover:[box-shadow:rgb(171,_196,_245)_0px_0px] px-8"
                    onClick={handleSubmit(signInByEmail)}
                  >
                    <div className="mr-6 font-bold">Join Flowspark</div>
                    <div className="h-4 w-4 flex-none">
                      <svg
                        fill="currentColor"
                        viewBox="0 0 20 21"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title>Arrow Right</title>
                        <polygon points="16.172 9 10.101 2.929 11.515 1.515 20 10 19.293 10.707 11.515 18.485 10.101 17.071 16.172 11 0 11 0 9"></polygon>
                      </svg>
                    </div>
                  </Link>
                </form>
              </div>
              <p className="text-sm text-[#636262]">
                Already have an account?{' '}
                <Link
                  href="/login/register"
                  className="font-[Montserrat,_sans-serif] text-sm font-bold text-black"
                >
                  Login now
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;

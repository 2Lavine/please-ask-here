'use client';
import { REGISTER } from '@/utils/url';
import { ErrorMessage } from '@hookform/error-message';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
export default function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const router = useRouter();
  const signUp = async (data) => {
    console.log('signUp', REGISTER, data);
    const { password, email } = data;
    const res = await fetch(REGISTER, {
      method: 'POST',
      body: JSON.stringify({ password, email, type: 'email' }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const body = await res.json();
    console.log('signUp', body);
    const { success } = body.data;
    if (success) {
      router.push('/');
    }
  };
  return (
    <div className="grid h-auto grid-cols-1 md:h-screen md:grid-cols-2 gap-0">
      <div className="flex flex-col items-center justify-center bg-white">
        <div className="py-16 md:py-24 lg:py-32 px-5 md:px-10">
          <div className="max-w-[480px] text-center md:max-w-[480px]">
            <h2 className="mb-8 text-3xl font-bold md:mb-12 md:text-5xl lg:mb-16">
              Start your 14-day free trial
            </h2>
            <div className="mx-auto mb-4 max-w-[400px] pb-4">
              <form
                name="wf-form-password"
                method="get"
                onSubmit={handleSubmit(signUp)}
              >
                <ErrorMessage
                  errors={errors}
                  name="email"
                  render={({ message }) => (
                    <p className="text-red-500 mt-[-1rem] text-sm text-left">
                      {message}
                    </p>
                  )}
                />
                <div className="relative">
                  <span className="i-iconamoon-email text-3xl absolute bottom-0 left-[3%] right-auto top-[20%] inline-block" />
                  <input
                    type="email"
                    className="m-0 mb-4 block h-9 w-full border border-black bg-[#f2f2f7] px-3 py-6 align-middle text-sm text-[#333333] focus:border-[#3898ec] pl-14"
                    name="name"
                    placeholder="Email Address"
                    required=""
                    {...register('email', {
                      required: 'Input you email address.',
                    })}
                  />
                  <div></div>
                  <div></div>
                </div>
                <ErrorMessage
                  errors={errors}
                  name="password"
                  render={({ message }) => (
                    <p className="text-red-500 mt-[-1rem] text-sm text-left">
                      {message}
                    </p>
                  )}
                />
                <div className="relative mb-4">
                  <span className="i-carbon-password text-3xl absolute bottom-0 left-[3%] right-auto top-[20%] inline-block" />
                  <input
                    type="password"
                    className="m-0 mb-4 block h-9 w-full border border-black bg-[#f2f2f7] px-3 py-6 align-middle text-sm text-[#333333] focus:border-[#3898ec] pl-14"
                    name="password"
                    placeholder="Password (min 8 characters)"
                    required=""
                    {...register('password', {
                      required: true,
                      // pattern: /^(?=.*[a-z])(?=.*[A-Z])[A-Za-z]{8,16}$/,
                      minLength: {
                        value: 8,
                        message: 'Password should at least has 8 characters.',
                      },
                    })}
                  />
                  {/* <div></div */}
                </div>
                <ErrorMessage
                  errors={errors}
                  name="agree"
                  render={({ message }) => (
                    <p className="text-red-500 mt-[-1rem] text-sm text-left">
                      {message}
                    </p>
                  )}
                />
                <label className="mb-6 flex items-center justify-start font-medium before:table before:content-['_'] before:[grid-area:1/1/2/2] md:mb-10 lg:mb-1 pb-12">
                  <input
                    type="checkbox"
                    name="checkbox"
                    className="m-0 p-0"
                    {...register('agree', {
                      required: 'Please agree with the terms & conditions',
                    })}
                  />
                  <span
                    className="ml-4 inline-block cursor-pointer text-sm"
                    for="checkbox"
                  >
                    I agree with the{' '}
                    <a href="#" className="font-bold text-[#0b0b1f]">
                      Terms &amp; Conditions
                    </a>
                  </span>
                </label>
                <a
                  href=""
                  className="flex max-w-full grid-cols-2 flex-row items-center justify-center bg-[#276ef1] px-8 py-4 text-center font-semibold text-white transition [box-shadow:rgb(171,_196,_245)_-8px_8px] hover:[box-shadow:rgb(171,_196,_245)_0px_0px]"
                  onClick={handleSubmit(signUp)}
                >
                  <div className="mr-6 font-bold">Start ASK</div>
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
                </a>
              </form>
            </div>
            <p className="text-sm text-[#636262]">
              Already have an account?{' '}
              <a href="#" className="text-sm font-bold text-black">
                Login now
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center bg-[#f2f2f7]">
        <div className="py-16 md:py-24 lg:py-32 px-5 md:px-10">
          <div className="mx-auto max-w-[480px] text-left md:max-w-[480px]">
            <div className="relative left-2 mb-5 flex h-14 w-14 flex-col items-center justify-center bg-[#276ef1] [box-shadow:rgb(171,_196,_245)_-8px_8px] md:mb-6 lg:mb-8"></div>
            <p className="mb-8 text-[#647084] md:mb-12 lg:mb-16">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis, lectus magna fringilla
              urna, porttitor rhoncus dolor purus non enim.
            </p>
            <p className="font-bold">John Robert</p>
            <p className="text-sm">Senior Webflow Developer</p>
          </div>
        </div>
      </div>
    </div>
  );
}

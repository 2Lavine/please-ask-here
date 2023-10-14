'use client';
import FundsButton from '@/components/FundsButton';
import { PAHButton } from '@/components/PAHButton';
import Recorder from '@/components/Recorder';
import { UserDetailCard } from '@/components/UserDetailCard';
import { useForm } from 'react-hook-form';
export default function Page() {
  const UserDetailCardargs = {
    followers: 46,
    answersNumber: 47,
    imgSrc: 'https://openask.me/assets/donation-5@2x-f6c8ed0a.png',
    big: false,
    type: 'EDIT',
    userDescription: `Entrepreneur, Investor, Father to 3 daughters, cyclist, surfer, poker player, and life hacker. Pre-seed up to $500K. pitch me: t.co/pat53we2xs.All proceeds to Charity. 
        Ask me about: StartupBuilding, Fundraising, EarlyStageInvesting`,
  };
  const data = JSON.parse(localStorage.getItem('user'));
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({
        name: data.name,
        bio: data.bio,
      }),
    });
    console.log(data);
  };
  return (
    <div className="w-10/12 mx-auto">
      <h1 className="text-xl font-bold my-8">People would see</h1>
      <UserDetailCard {...UserDetailCardargs} />
      <h1 className="text-xl font-bold my-8">Edit profile</h1>
      <div className="p-8 bg-white shadow-md rounded-lg my-8">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label htmlFor="displayName" className="block mb-2 font-bold">
              Display Name *
            </label>
            <input
              id="displayName"
              type="text"
              value={data.user.name}
              className="w-full p-2 border rounded"
              {...register('name', { required: true })}
            />
          </div>

          <div className="mb-4">
            <label className="block mb-2 font-bold">Your Voice Intro</label>

            <Recorder />
          </div>

          <div className="mb-4">
            <label htmlFor="bio" className="block mb-2 font-bold">
              Bio
            </label>
            <textarea
              id="bio"
              rows="3"
              className="w-full p-2 border rounded"
              {...register('bio', { required: true })}
            ></textarea>
          </div>

          {
            //   TODO add website
            /* <div className="mb-8">
            <label htmlFor="website" className="block mb-2 font-bold">
              Website
            </label>
            <input
              id="website"
              type="text"
              className="w-full p-2 border rounded"
              {...register('website', { required: true })}
            />
          </div> */
          }

          <PAHButton
            frontColor="bg-black"
            backColor="bg-white"
            width="w-full"
            textColor="text-white"
            onClick={handleSubmit(onSubmit)}
          >
            <button>Save Changes</button>
          </PAHButton>
        </form>
        {
          // TODO add change photo
          /* <div className="flex items-center mb-4 space-x-4">
          <Avatar src={data.user.image} className="w-20 h-20 text-large" />
          <PAHButton
            frontColor="bg-black"
            backColor="bg-white"
            width="w-48"
            textColor="text-white"
          >
            Change photo
          </PAHButton>
        </div> */
        }

        <div className="h-8"></div>
      </div>
      <div className="flex justify-between items-center  my-4  p-8 bg-white shadow-md rounded-lg">
        <div className="text-center">
          <div className="text-lg font-semibold mb-2">Balance</div>
          <div className="text-xl text-gray-700">$0</div>
        </div>
        <div className="text-center">
          <div className="text-lg font-semibold mb-2">Total Earnings</div>
          <div className="text-xl text-gray-700">$0</div>
        </div>
        <FundsButton />
      </div>
      <div className="h-8"></div>
    </div>
  );
}

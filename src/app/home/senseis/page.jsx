'use client';
import CategoryTabs from '@/components/CategoryTabs';
import { UserDetailCard } from '@/components/UserDetailCard';
import { Select, SelectItem } from '@nextui-org/react';
export default function Page() {
  const UserDetailCardargs = {
    followers: 46,
    answersNumber: 47,
    imgSrc: 'https://openask.me/assets/donation-5@2x-f6c8ed0a.png',
    big: false,
    type: 'SHOW',
    userDescription: `Entrepreneur, Investor, Father to 3 daughters, cyclist, surfer, poker player, and life hacker. Pre-seed up to $500K. pitch me: t.co/pat53we2xs.All proceeds to Charity. 
    Ask me about: StartupBuilding, Fundraising, EarlyStageInvesting`,
  };
  const UserListargs = [
    UserDetailCardargs,
    UserDetailCardargs,
    UserDetailCardargs,
  ];
  const order = [
    {
      value: 'new to old',
      label: 'New to Old',
    },
  ];
  return (
    <div className="w-9/12 mx-auto">
      <div className="flex items-center p-4  justify-between">
        <div className="flex">
          <div className="mr-4">
            <p className="text-black font-semibold underline ">
              Martin Tobias (Pre-Seed VC)
            </p>
          </div>
          <div>/</div>
          <div className=" pl-4 underline">
            <div className=" font-semibold">Asks</div>
          </div>
        </div>
        <Select
          label="Sort by"
          placeholder="Followers"
          // labelPlacement="outside-left"
          className="w-48 text-black"
          classNames={{
            trigger: 'bg-white',
            // label: 'w-24 ',
          }}
        >
          {order.map((item) => (
            <SelectItem key={item.value} value={item.value}>
              {item.label}
            </SelectItem>
          ))}
        </Select>
      </div>
      <CategoryTabs />{' '}
      {UserListargs.map((item) => (
        <>
          <UserDetailCard {...item} key={item.userDescription} />
          <div className="h-8"></div>
        </>
      ))}
      {/* <UserDetailCard {...UserDetailCardargs} /> */}
    </div>
  );
}

'use client';
import { UserDetailCard } from '@/components/UserDetailCard';
import { Select, SelectItem } from '@nextui-org/react';
import { useEffect, useState } from 'react';
export default function Page() {
  const [UserListargs, setUserListargs] = useState([]);
  useEffect(() => {
    fetch('/api/subscription?userID=' + 1, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setUserListargs(res.subsctiption);
      })
      .catch((error) => {
        console.error('Error fetching SUBSCRIPTION:', error);
      });
  }, []);
  const order = [
    {
      value: 'new to old',
      label: 'New to Old',
    },
  ];
  const unSubscribe = (questionersID) => {
    console.log('unSubscribe');
    setUserListargs(
      UserListargs.filter((item) => item.questionersID != questionersID)
    );
    fetch('/api/subscription', {
      method: 'Delete',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        questionersID: questionersID,
        userID: 1,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };
  return (
    <div className="w-9/12 mx-auto">
      <div className="flex items-center p-4  justify-between">
        <div className="flex">
          <div className="mr-4">
            <p className="text-black font-semibold text-xl ">Subscription</p>
          </div>
        </div>
        <Select
          label="Sort by"
          placeholder="Followers"
          // labelPlacement="outside-left"
          className="w-32 text-black"
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
      <div className="flex flex-col space-y-6">
        {UserListargs.map((item) => (
          <UserDetailCard
            {...item}
            key={item.questionersID}
            onUnSubscribe={() => unSubscribe(item.questionersID)}
          />
        ))}
      </div>
    </div>
  );
}

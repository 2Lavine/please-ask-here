'use client';
import { Card, CardBody, CardFooter, CardHeader } from '@nextui-org/react';
import { PAHAvatar } from './PAHAvatar';
import { PAHButton } from './PAHButton';
export function UserCard(props) {
  const { followers, answersNumber, userDescription } = props;
  return (
    <>
      <Card
        className="
         mx-2 w-72 
         my-4
          flex justify-center
          px-2
         items-center z-10"
      >
        <CardHeader>
          <div className="mt-2 w-full flex items-center justify-center">
            <PAHAvatar />
          </div>
        </CardHeader>
        <CardBody className="pt-0 px-6 flex items-center justify-center">
          <div className="my-2 font-bold">userName</div>
          <div className="flex flex-row items-center justify-center content-baseline">
            <span className="i-material-symbols-heart-check-rounded cursor-pointer" />
            <div className="mx-2 text-xs text-gray-400">{followers}</div>
            <span className="i-material-symbols-heart-check-rounded  cursor-pointer" />
            <div className="mx-2 text-xs text-gray-400">{answersNumber}</div>
          </div>
          <p className="line-clamp-2 text-sm font-light mt-4">
            {userDescription}
          </p>
        </CardBody>
        <CardFooter className="flex items-center justify-center mb-2">
          <PAHButton
            frontColor="bg-white"
            backColor="bg-black"
            textColor="bg-white"
            width="w-28"
          >
            ASK ME
          </PAHButton>
        </CardFooter>
      </Card>
    </>
  );
}

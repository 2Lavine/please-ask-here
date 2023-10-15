'use client';
import { ErrorMessage } from '@hookform/error-message';
import {
  Card,
  CardBody,
  CardHeader,
  Divider,
  Input,
  Select,
  SelectItem,
  Spacer,
  Textarea,
} from '@nextui-org/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import FundsButton from './FundsButton';
import { PAHAvatar } from './PAHAvatar';
import { PAHButton } from './PAHButton';

const MoneyTypes = ['USDT', 'ETH', 'BTC'];
export function UserDetailCard(props) {
  const {
    followers = 46,
    userName = 'Martin Tobias',
    userLINk = 'martintobias',
    userBalance = 0,
    answersNumber,
    userDescription,
    type = 'SHOW',
    questionersID,
    onUnSubscribe,
    followed = false,
  } = props;
  const [follow, setFollow] = useState(followed);
  const [followNumber, setFollowNumber] = useState(followers);
  const router = useRouter();
  const goToQuestioners = () => {
    console.log(questionersID);
    router.push('/home/questioners/' + questionersID);
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const followeQuestioner = () => {
    setFollow(true);
    setFollowNumber(followNumber + 1);
    fetch('/api/subscription', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        questionerID: questionersID,
      }),
    });
  };
  const unfollowQuestioner = () => {
    setFollow(false);
    setFollowNumber(followNumber - 1);
    fetch('/api/subscription', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        questionerID: questionersID,
      }),
    });
  };
  const onSubmit = (data) => {
    let userData = localStorage.getItem('user');
    fetch('/api/questions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        askerID: JSON.parse(userData).id || 1,
        questionerID: questionersID,
        question: data.question,
        price: data.price,
        currency: data.currency,
        anonymous: data.anonymous,
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        // console.log(data);
        const { questionID } = data;
        router.push('/home/questions/' + questionID);
      });
  };
  return (
    <>
      <Card
        className="
          flex justify-center
          px-2
          pb-4
         items-center "
      >
        <CardHeader className="h-28">
          <div className="mt-2 w-full flex items-center relative">
            <PAHAvatar />
            <div className="flex-1 ml-6 ">
              <div className="flex justify-between">
                <div className="flex flex-col">
                  <div className="font-bold">{userName}</div>
                  <div className="font-medium">@{userLINk}</div>
                </div>
                {type == 'SHOW' && follow && (
                  <div className="flex space-x-4">
                    <PAHButton
                      frontColor="bg-black"
                      backColor="bg-white"
                      width="w-28"
                      textColor="text-white"
                      onClick={unfollowQuestioner}
                    >
                      Unsubscribe
                    </PAHButton>
                    <PAHButton
                      frontColor="bg-black"
                      backColor="bg-white"
                      width="w-20"
                      textColor="text-white"
                      onClick={goToQuestioners}
                    >
                      ASK
                    </PAHButton>
                  </div>
                )}
                {type == 'SHOW' && !follow && (
                  <div className="flex space-x-4">
                    <PAHButton
                      frontColor="bg-black"
                      backColor="bg-white"
                      width="w-28"
                      textColor="text-white"
                      onClick={followeQuestioner}
                    >
                      Follow
                    </PAHButton>
                    <PAHButton
                      frontColor="bg-black"
                      backColor="bg-white"
                      width="w-20"
                      textColor="text-white"
                      onClick={goToQuestioners}
                    >
                      ASK
                    </PAHButton>
                  </div>
                )}
                {type == 'EDIT' && (
                  <PAHButton
                    frontColor="bg-black"
                    backColor="bg-white"
                    width="w-44"
                    textColor="text-white"
                  >
                    EDIT PROFILE
                  </PAHButton>
                )}
                {type == 'SUBSCRIPTION' && (
                  <div className="flex space-x-4">
                    <PAHButton
                      frontColor="bg-black"
                      backColor="bg-white"
                      width="w-28"
                      textColor="text-white"
                      onClick={onUnSubscribe}
                    >
                      Unsubscribe
                    </PAHButton>
                    <PAHButton
                      frontColor="bg-black"
                      backColor="bg-white"
                      width="w-20"
                      textColor="text-white"
                      onClick={goToQuestioners}
                    >
                      ASK
                    </PAHButton>
                  </div>
                )}
              </div>
              <div className="flex flex-row items-center content-baseline">
                <span className="i-simple-icons-answer" />
                <div className="mx-2  text-gray-400">
                  {followNumber} followers
                </div>
                <span className="i-fluent-divider-tall-24-regular ml-2 mr-4" />
                <span className="i-simple-icons-answer" />
                <div className="mx-2  text-gray-400">
                  {answersNumber} answers
                </div>
              </div>
            </div>
          </div>
        </CardHeader>
        <CardBody className="py-0 px-4 mb-2 flex items-center justify-center">
          <p className="text font-light mt-4 w-full">{userDescription}</p>
        </CardBody>
        {type == 'INPUT' && (
          <form className="w-full">
            <div className="px-4 w-full ">
              <Divider className="my-4" />
              <ErrorMessage
                errors={errors}
                name="question"
                render={({ message }) => (
                  <p className="text-red-500">{message}</p>
                )}
              />
              <Textarea
                placeholder="Ask anything to Martin Tobias (Pre-Seed VC)"
                variant="bordered"
                className="w-full"
                minRows="5"
                aria-label="Ask anything to Martin Tobias (Pre-Seed VC)"
                classNames={{
                  inputWrapper: ' outline-none hover:ring-2	ring-blue-500',
                }}
                {...register('question', {
                  required: true,
                  message: 'Please input your question',
                })}
              />
              <div className="mt-4 mb-2">Price you offer</div>
              <div className="flex items-center">
                <Input
                  type="number"
                  size="lg"
                  isClearable
                  classNames={{
                    inputWrapper: 'h-12',
                  }}
                  variant="bordered"
                  placeholder="0.00"
                  aria-label="Price you offer"
                  {...register('price', { required: true })}
                />
                <Spacer x="4" />
                <Select
                  startContent={
                    <span className="i-cryptocurrency-color-usd text-4xl" />
                  }
                  size="md"
                  variant="bordered"
                  className="basis-2/5 "
                  aria-label="Currency"
                  {...register('currency', { required: true })}
                  classNames={{
                    innerWrapper: 'p-0',
                    mainWrapper: 'h-12',
                  }}
                >
                  {MoneyTypes.map((type) => (
                    <SelectItem
                      key={type}
                      labelPlacement="inside"
                      startContent={
                        <span className="i-cryptocurrency-color-usd" />
                      }
                      value={type}
                    >
                      {type}
                    </SelectItem>
                  ))}
                </Select>
              </div>
            </div>
            <div className="px-4 mt-4 flex justify-between items-center w-full">
              <div className="text-sm">
                Your USD balance
                <span className="font-bold">${userBalance}</span>
              </div>
              <FundsButton />
            </div>
            <div className="p-4 space-y-4 w-full">
              <div className="flex justify-between items-center mb-10">
                <label className="flex items-center">
                  <span className="text-gray-700 mr-2">Anonymous Ask</span>
                  <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
                    <input
                      type="checkbox"
                      name="toggle"
                      id="toggle"
                      value={false}
                      aria-label="Anonymous Ask"
                      className="outline-none right-4 checked:right-0 duration-200 ease-in absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
                      {...register('anonymous')}
                    />
                    <label
                      htmlFor="toggle"
                      className="block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
                    ></label>
                  </div>
                </label>
                <PAHButton
                  frontColor="bg-black"
                  backColor="bg-white"
                  width="w-52"
                  textColor="text-white"
                  onClick={handleSubmit(onSubmit)}
                >
                  Submit Ask
                </PAHButton>
              </div>
              <div className="m-8 bg-gray-200 p-4">
                <p className="text-center">
                  100% of proceeds will be donated to ReTree Foundation
                </p>
              </div>
            </div>
          </form>
        )}
      </Card>
    </>
  );
}

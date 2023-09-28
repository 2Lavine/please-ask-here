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

import { PAHAvatar } from './PAHAvatar';
const MoneyTypes = ['USDT', 'ETH', 'BTC'];
export function UserDetailCard(props) {
  const { followers, answersNumber, userDescription } = props;
  return (
    <>
      <Card
        className="
         mx-2 
          flex justify-center
          px-2
          pb-4
         items-center "
      >
        <CardHeader className="h-28">
          <div className="mt-2 w-full flex items-center relative">
            <PAHAvatar />
            <div className="flex-1 ml-6 ">
              <div className="font-bold">userName</div>
              <div className="font-medium">@Link</div>
              <div className="flex flex-row items-center content-baseline">
                <span className="i-simple-icons-answer" />
                <div className="mx-2  text-gray-400">
                  {followers} followers{' '}
                </div>
                <span className="i-fluent-divider-tall-24-regular ml-2 mr-4" />
                <span className="i-simple-icons-answer" />
                <div className="mx-2  text-gray-400">
                  {answersNumber} answers
                </div>
              </div>
              {/*TODO: add follow button*/}
              {/*<div className="absolute top-0 right-0"></div> */}
            </div>
          </div>
        </CardHeader>
        <CardBody className="py-0 px-4 mb-2 flex items-center justify-center">
          <p className="text font-light mt-4">{userDescription}</p>
        </CardBody>
        <div className="px-4 w-full ">
          <Divider className="my-4" />
          <Textarea
            placeholder="Ask anything to Martin Tobias (Pre-Seed VC)"
            variant="bordered"
            className="w-full"
            minRows="5"
            classNames={{
              inputWrapper: ' outline-none hover:ring-2	ring-blue-500',
            }}
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
            />
            <Spacer x="4" />
            <Select
              startContent={
                <span className="i-cryptocurrency-color-usd text-4xl" />
              }
              size="md"
              variant="bordered"
              className="basis-2/5 "
              classNames={{
                innerWrapper: 'p-0',
                mainWrapper: 'h-12',
              }}
            >
              {MoneyTypes.map((type) => (
                <SelectItem
                  key={type}
                  labelPlacement="inside"
                  startContent={<span className="i-cryptocurrency-color-usd" />}
                  value={type}
                >
                  {type}
                </SelectItem>
              ))}
            </Select>
          </div>
        </div>
      </Card>
    </>
  );
}

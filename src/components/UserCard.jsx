import {
  Avatar,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
} from '@nextui-org/react';
import { useState } from 'react';
import { PAHButton } from './PAHButton';
export function UserCard(props) {
  const [isPlaying, setIsPlaying] = useState(false);
  //   const audio = new Audio(props.audioSrc);
  const audio = { play: () => '', stop: () => '' };

  const controlAudio = (audio) => {
    if (!audio) return;
    if (!isPlaying) {
      audio.play();
    } else {
      audio.stop();
    }
    setIsPlaying((isPlaying) => !isPlaying);
  };
  let followers = 46;
  let answersNumber = 47;
  let AvatarClassNames = {
    base: 'ring-2',
    img: 'hover:brightness-50',
  };
  console.log(AvatarClassNames.img, 'AvatarClassNames.img', isPlaying);
  const userDescription = `Founder of @ProductHunt. Investor at @WeekendFund. Writing about fun(d) stuff at t.co/tsunRiiECA with @vedikaja_in. Say hi! Ask me about: StartupBuilding, Fundraising, EarlyStageInvesting`;
  return (
    <>
      <Card
        className="
         mx-2 w-72 
          flex justify-center
          px-2
         items-center z-10"
      >
        <CardHeader>
          <div className="mt-2 w-full flex items-center justify-center">
            <div className="relative  rounded-full ml-2 w-50 ">
              <Avatar
                src={props.imgSrc}
                size="lg"
                radius="full"
                isBordered
                color="success"
                className={`z-20 mx-auto play-icon  ${
                  isPlaying ? 'brightness-50' : ''
                }`}
                classNames={{
                  base: 'ring-2',
                  img: 'hover:brightness-50',
                }}
                alt="logo"
              ></Avatar>
              {isPlaying ? (
                <div
                  onClick={() => controlAudio(audio)}
                  className="pointer-events-auto cursor-pointer absolute top-1/2 z-50 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    className="fill-white"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 8v8v-8Zm0 10q-.825 0-1.413-.588T6 16V8q0-.825.588-1.413T8 6h8q.825 0 1.413.588T18 8v8q0 .825-.588 1.413T16 18H8Zm0-2h8V8H8v8Z" />
                  </svg>
                </div>
              ) : (
                <div
                  onClick={() => controlAudio(audio)}
                  className="cursor-pointer pointer-events-auto opacity-0 hover:opacity-100 absolute top-1/2 z-50 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="fill-white rounded-full"
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 19V5l11 7l-11 7Z" />
                  </svg>
                </div>
              )}
            </div>
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
          <PAHButton>ASK ME</PAHButton>
        </CardFooter>
      </Card>
    </>
  );
}

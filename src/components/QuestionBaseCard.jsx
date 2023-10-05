'use client';
import { Avatar, Card, Progress } from '@nextui-org/react';
import { useState } from 'react';
export function QuestionBaseCard(props) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audio = { play: () => '', stop: () => '' };
  const playAudion = (audio) => {
    audio.play();
    setIsPlaying(true);
  };
  const stopAudio = (audio) => {
    audio.stop();
    setIsPlaying(false);
  };
  return (
    <div className="relative flex-col flex h-40 bg-white overflow-hidden">
      <Card className="bg-slate-50 shadow-none p-4 mb-0 pb-0 flex flex-row z-10">
        <div className="mt-4 h-24">
          <div className="relative rounded-full ml-2 w-50 ">
            <Avatar
              src={props.imgSrc}
              size="lg"
              radius="full"
              isBordered
              color="success"
              className="z-20  play-icon"
              classNames={{
                base: 'ring-2',
                img: 'brightness-50',
              }}
              alt="logo"
            ></Avatar>
            {isPlaying ? (
              <div
                onClick={() => stopAudio(audio)}
                className="cursor-pointer	 absolute top-1/2 z-50 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
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
                onClick={() => playAudion(audio)}
                className="cursor-pointer	absolute top-1/2 z-50 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
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
        <div className="flex-col mt-4 ml-6">
          <div className="mr-2 font-bold ">{props.userName}</div>
          <div className="mr-2 text-sm ttext-slate-400">{props.answerTime}</div>
          <div className="mr-2 text-sm">{props.questionTime}</div>
        </div>
      </Card>
      <Progress
        className={` -translate-y-4 ${
          props.big ? 'scale-97 ' : 'scale-95'
        } z-0 h-12 absoulute bottom-0`}
        size="lg"
        aria-label="Loading..."
        color="success"
        radius="lg"
        value={30}
      />
    </div>
  );
}

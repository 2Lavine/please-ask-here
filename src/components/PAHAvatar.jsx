'use client';
import { Avatar } from '@nextui-org/react';
import { useEffect, useState } from 'react';
export function PAHAvatar({
  audioSrc = 'https://openask-prd-public.oss-us-west-1.aliyuncs.com/3bebe5bb153142e5a0bb10fe4f3cf9ba/1694109802816_h5_audio-free.mp3',
  imgSrc = 'https://openask.me/assets/donation-5@2x-f6c8ed0a.png',
}) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio, setAudio] = useState(null);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const controlAudio = () => setIsPlaying(!isPlaying);
  useEffect(() => {
    // Get the value from local storage if it exists
    setAudio(new Audio(audioSrc));
  }, [audioSrc]);
  useEffect(() => {
    isPlaying ? audio?.play() : audio?.pause();
    setDuration(audio?.duration);
  }, [isPlaying, audio]);

  useEffect(() => {
    const handleTimeUpdate = () => {
      setCurrentTime(audio?.currentTime);
    };
    audio?.addEventListener('timeupdate', handleTimeUpdate);
    return () => {
      audio?.removeEventListener('timeupdate', handleTimeUpdate);
    };
  }, [audio]);
  return (
    <div className="relative rounded-full ml-2 group '">
      <Avatar
        src={imgSrc}
        size="lg"
        radius="full"
        isBordered
        color="success"
        className={`z-20 mx-auto play-icon  ${
          isPlaying ? 'brightness-50' : 'group-hover:brightness-50'
        }`}
        classNames={{
          base: 'ring-2',
        }}
        alt="logo"
      ></Avatar>
      {isPlaying ? (
        <div
          onClick={controlAudio}
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
          onClick={controlAudio}
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
  );
}

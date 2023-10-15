'use client';
import FundsButton from '@/components/FundsButton';
import {
  Avatar,
  Card,
  Modal,
  ModalContent,
  Progress,
  useDisclosure,
} from '@nextui-org/react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { PAHButton } from './PAHButton';
export function QuestionBaseCard(props) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [isPlaying, setIsPlaying] = useState(false);
  const [userData, setUserData] = useState(null);
  const router = useRouter();
  const {
    paid = 'true',
    imgSrc = 'https://openask.me/assets/donation-5@2x-f6c8ed0a.png',
    questionID = 1,
    paidNumber = 10,
    paidPeople = 0,
    userName = 'hello world',
    answerTime = '00:00',
    questionTime = '00:00',
    big = false,
    isFree = false,
    // audioSrc,
    audioSrc = 'https://openask-prd-public.oss-us-west-1.aliyuncs.com/3bebe5bb153142e5a0bb10fe4f3cf9ba/1694109802816_h5_audio-free.mp3',
    answerContent = 'Answers of AnswersAnswersAnswersAnswersd. WriAnswersAnswersAnswersAnswers /tsunRiiECA with @vedikaja_in. Say hi! Ask me about: StartupBuilding, Fundraising, EarlyStageInvesting',
  } = props;
  const [audio, setAudio] = useState(null);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const controlAudio = () => setIsPlaying(!isPlaying);
  useEffect(() => {
    // Get the value from local storage if it exists
    const userData = JSON.parse(localStorage.getItem('user') || '{}');
    setUserData(userData);
    setAudio(new Audio(audioSrc));
  }, [audioSrc]);

  useEffect(() => {
    isPlaying ? audio?.play() : audio?.pause();
    setDuration(Math.floor(audio?.duration));
  }, [isPlaying, audio]);

  useEffect(() => {
    const handleTimeUpdate = () => {
      if (Math.floor(audio?.currentTime) == Math.floor(audio?.duration)) {
        setIsPlaying(false);
      } else setCurrentTime(Math.floor(audio?.currentTime));
    };
    audio?.addEventListener('timeupdate', handleTimeUpdate);
    return () => {
      audio?.removeEventListener('timeupdate', handleTimeUpdate);
    };
  }, [audio]);

  const payMoney = () => {
    const URL = `/api/questions/${questionID}/transaction`;
    fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        paidNumber,
        type: 'USDT',
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        router.push(`/home/questions/${questionID}`);
      });
  };
  return (
    <div className="relative flex-col flex  bg-white overflow-hidden">
      <Card className="bg-slate-50 shadow-none p-4 mb-0 pb-0 flex flex-row z-10">
        <div className="mt-4 h-24">
          <div
            className={`relative rounded-full ml-2 w-50 ${
              audioSrc ? 'group' : ''
            }`}
          >
            <Avatar
              src={imgSrc}
              size="lg"
              radius="full"
              isBordered
              color="success"
              className="z-20  play-icon group-hover:brightness-50"
              classNames={{
                base: 'ring-2',
                img: 'brightness-50',
              }}
              alt="logo"
            ></Avatar>
            {isFree || paid ? (
              audioSrc ? (
                isPlaying ? (
                  <div
                    onClick={controlAudio}
                    className="cursor-pointer	absolute top-1/2 z-50 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
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
                )
              ) : null
            ) : (
              <div>
                <div
                  onClick={onOpen}
                  className="cursor-pointer	absolute top-1/2 z-50 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                >
                  <span className="i-mdi-eye-off-outline text-white text-[2rem]" />
                </div>
                <Modal size="2xl" isOpen={isOpen} onOpenChange={onOpenChange}>
                  <ModalContent className="p-12">
                    {(onClose) => (
                      <div className="bg-white p-2  max-w-lg mx-auto w-full">
                        <h2 className="text-4xl text-center font-bold mb-4">
                          Join the crowd!
                        </h2>
                        <p className="mb-6 text-center">
                          Join {paidPeople}+ others and peek into the creators
                          response!
                        </p>
                        <div className="flex items-center mb-6 justify-center space-x-4">
                          <div className="p-4 bg-green-200 rounded-full w-16 h-16">
                            <span className="bg-green-500 i-mdi-eye-off-outline w-8 h-8 rounded-full"></span>
                          </div>
                          <div>
                            <span className="i-mingcute-right-fill text-2xl" />
                            <span className="i-mingcute-right-fill text-2xl" />
                          </div>
                          <Image
                            src={imgSrc}
                            alt="avatar"
                            width={64}
                            height={64}
                          />
                        </div>
                        <div className="flex-grow text-center mb-4">
                          <h3 className="font-bold text-lg mb-4">{userName}</h3>
                          <p className="text-gray-500">
                            Your USD balance is ${userData?.Blance || 0}
                          </p>
                        </div>
                        <div className="flex justify-center space-x-4">
                          {(userData?.Blance || 10) == 0 && paidNumber > 0 ? (
                            <FundsButton width="w-2/3" />
                          ) : (
                            <>
                              <PAHButton width="w-1/3" onClick={payMoney}>
                                Pay ${paidNumber}
                              </PAHButton>
                              <FundsButton width="w-1/3" />
                            </>
                          )}
                        </div>
                      </div>
                    )}
                  </ModalContent>
                </Modal>
              </div>
            )}
          </div>
        </div>
        <div className="flex-col mt-4 ml-6">
          <div className="mr-2 font-bold ">{userName}</div>
          <div className="mr-2 text-sm text-slate-400">{answerTime}</div>
          <div className="mr-2 text-sm">{questionTime}</div>
        </div>
      </Card>
      <Progress
        className={` -translate-y-4 ${
          big ? 'scale-97 ' : 'scale-95'
        } z-0 h-12 absoulute bottom-0`}
        size="lg"
        aria-label="Loading..."
        color="success"
        radius="lg"
        value={currentTime}
        maxValue={duration}
      />
      {answerContent && (
        <div className="mt-[-3rem]">
          {/* <Divider className="mt-[-2rem]" /> */}
          <div className="min-h-[5rem] p-2 mb-12 mt-4">{answerContent}</div>
        </div>
      )}
    </div>
  );
}

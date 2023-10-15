'use client';
import { QuestionBaseCard } from '@/components/QuestionBaseCard';
import Recorder from '@/components/Recorder';
import { ErrorMessage } from '@hookform/error-message';
import {
  Avatar,
  AvatarGroup,
  Card,
  CardFooter,
  Divider,
  Textarea,
} from '@nextui-org/react';
import { message } from 'antd';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { PAHButton } from './PAHButton';
export function QuestionCard(props) {
  const {
    userName = 'Anonymous User',
    answerTime = '00:00',
    questionTime = '00:00',
    imgSrc = 'https://openask.me/assets/donation-5@2x-f6c8ed0a.png',
    big = false,
    questionDes = 'Ask anything to Martin Tobias (Pre-Seed VC)',
    isDetail = false,
    questionID = 1,
    paidNumber = 10,
    paid = true,
    isQuestioner = false,
    likePeople = 46,
    onDelete,
    answerContent,
  } = props;
  const QuestionBaseArgs = {
    userName,
    answerTime,
    questionTime,
    imgSrc,
    big,
    paid,
    paidNumber,
    answerContent,
  };
  const [showInput, setShowInput] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();
  const success = () => {
    messageApi.open({
      type: 'success',
      content: 'Successfully answered the question',
    });
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const toggleInput = () => {
    setShowInput(!showInput);
  };
  const onSubmit = (data) => {
    fetch('/api/questions', {
      method: 'POST',
      body: JSON.stringify({
        answer: data.answer,
        questionID: props.questionID,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.code == '200') {
          toggleInput();
          success();
          onDelete(questionID);
        }
      });
  };
  const router = useRouter();

  const [Liked, setLiked] = useState(false);
  const [likeNumber, setLikeNumber] = useState(likePeople); // [46, 47]
  const likeQuestion = (id) => {
    setLiked(!Liked);
    if (!Liked) {
      setLikeNumber(likeNumber + 1);
      fetch('/api/likeQuestion', {
        method: 'POST',
        body: JSON.stringify({ id }),
      });
    } else {
      setLikeNumber(likeNumber - 1);
      fetch('/api/dislikeQuestion', {
        method: 'POST',
        body: JSON.stringify({ id }),
      });
    }
  };
  const goToQuestions = () => {
    console.log(questionID);
    router.push('/home/questions/' + questionID);
  };
  return (
    <div>
      <Card className="w-full px-6 py-4 mb-8">
        <div>
          {isDetail ? (
            <div
              onClick={!isQuestioner ? goToQuestions : toggleInput}
              className="cursor-pointer"
            >
              <div className="font-bold">Anonymous User</div>
              <div className="text-sm mb-2 text-gray-400 ">
                Paid $20 for this question
              </div>
              <div className="text-md font-bold mb-6 ">{questionDes}</div>
            </div>
          ) : (
            <div
              onClick={goToQuestions}
              className="text-md font-bold mb-4 cursor-pointer"
            >
              {questionDes}
            </div>
          )}
          <QuestionBaseCard {...QuestionBaseArgs} />
        </div>
        <CardFooter className="mt-[-2rem] z-20 flex-col items-start">
          {isDetail && (
            <>
              <div className="flex justify-between w-full">
                <AvatarGroup size="sm" isBordered max={3} total={10}>
                  <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
                  <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
                  <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
                  <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
                </AvatarGroup>
                <div className="flex items-center font-medium ">
                  <div className="bg-red-500 w-8 h-8 flex justify-center items-center rounded-full">
                    <span className=" i-ph-ear-bold text-xl  " />
                  </div>
                  <div className="mx-2 text-slate-600">47 Eavesdropped</div>
                </div>
              </div>
              <Divider className="my-4" />
            </>
          )}
          <div className="flex font-medium">
            {isDetail && (
              <div className="flex items-center justify-center">
                <span className=" i-ph-ear-bold text-xl " />
                <div className="mx-2">46</div>
              </div>
            )}
            <div
              className="flex items-center justify-center mr-4"
              onClick={() => likeQuestion(questionID)}
            >
              {Liked ? (
                <span className="i-material-symbols-heart-check-rounded text-xl cursor-pointer" />
              ) : (
                <span className="i-material-symbols-heart-plus-outline text-xl cursor-pointer" />
              )}
              <div className="mx-2">{likeNumber} </div>
              <div>Likes</div>
            </div>
            <div className="flex items-center justify-center">
              <span className="i-akar-icons-share-arrow" />
              <div className="mx-2">46</div>
            </div>
          </div>
          {contextHolder}
          {showInput && (
            <form className="w-full">
              <Divider className="my-4" />
              <div className="w-full ">
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
                  {...register('answer', {
                    required: true,
                    message: 'Please input your answer',
                  })}
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2 font-bold">or use Voice</label>
                <Recorder type="Answer" />
              </div>
              <PAHButton width="w-full" onClick={handleSubmit(onSubmit)}>
                SUBMIT
              </PAHButton>
            </form>
          )}
        </CardFooter>
      </Card>
    </div>
  );
}

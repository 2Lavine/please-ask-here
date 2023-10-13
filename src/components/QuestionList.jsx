'use client';
import { QuestionCard } from '@/components/QuestionCard';
import { Spacer } from '@nextui-org/react';
export default function QuestionList() {
  const QuestionCardargs = {
    userName: 'User Name',
    answerTime: 'Answer Time',
    questionTime: '1:25',
    questionDes: 'How awesome is Jason Calacanis at investing and podcasting?',
    imgSrc: 'https://openask.me/assets/donation-5@2x-f6c8ed0a.png',
    big: false,
    isDetail: false,
  };
  return (
    <div className="flex items-center justify-between">
      <QuestionCard {...QuestionCardargs} />
      <Spacer x={4} />
      <QuestionCard {...QuestionCardargs} />
    </div>
  );
}

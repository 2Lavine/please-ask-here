import { QuestionCard } from '@/components/QuestionBaseCard';
import { Card, CardFooter } from '@nextui-org/react';
import { useState } from 'react';
export function BriefQuestionCard(props) {
  const {
    userName,
    answerTime,
    questionTime,
    imgSrc,
    big,
    questionDes,
    id,
    loveNumber,
  } = props;
  // let likeNumber = 46;
  const QuestionBaseArgs = { userName, answerTime, questionTime, imgSrc, big };
  const [Liked, setLiked] = useState(false);
  // const [likeNumber, setLikeNumber] = useState(loveNumber); // [46, 47
  const [likeNumber, setLikeNumber] = useState(46); // [46, 47
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
  return (
    <div className="w-[26rem]">
      <Card className="w-full p-2 pt-4">
        <div className="text-md font-bold mx-2 mb-6 ">{questionDes}</div>
        <QuestionCard {...QuestionBaseArgs} />
        <CardFooter className="mt-[-2rem] z-20">
          <div className="flex ml-4 items-center justify-center">
            <span className=" i-ph-ear-bold text-xl " />
            <div className="mx-2">46</div>
          </div>
          <div
            className="flex ml-4 items-center justify-center"
            onClick={() => likeQuestion(id)}
          >
            {Liked ? (
              <span className="i-material-symbols-heart-check-rounded text-xl cursor-pointer" />
            ) : (
              <span className="i-material-symbols-heart-plus-outline text-xl cursor-pointer" />
            )}
            <div className="mx-2">{likeNumber}</div>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}

'use client';
import { QuestionBaseCard } from '@/components/QuestionBaseCard';
import {
  Avatar,
  AvatarGroup,
  Card,
  CardFooter,
  Divider,
} from '@nextui-org/react';
import { useState } from 'react';
export function QuestionCard(props) {
  const {
    userName,
    answerTime,
    questionTime,
    imgSrc,
    big,
    questionDes,
    id,
    isDetail,
    // loveNumber,
  } = props;
  // let likeNumber = 46;
  const QuestionBaseArgs = {
    userName,
    answerTime,
    questionTime,
    imgSrc,
    big,
  };
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
    <div>
      <Card className="w-full px-6 py-4 mb-8">
        <div className="">
          {isDetail ? (
            <>
              <div className="font-bold">Anonymous User</div>
              <div className="text-sm mb-2 text-gray-400 ">
                Paid $20 for this question
              </div>
              <div className="text-md font-bold mb-6 ">{questionDes}</div>
            </>
          ) : (
            <div className="text-md font-bold mb-4 ">{questionDes}</div>
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
              onClick={() => likeQuestion(id)}
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
        </CardFooter>
      </Card>
    </div>
  );
}

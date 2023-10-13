import { Avatar } from '@nextui-org/react';
import { useState } from 'react';
export function PAHAvatar(props) {
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
  // let AvatarClassNames = {
  //   base: 'ring-2',
  //   img: 'hover:brightness-50',
  // };
  // console.log(AvatarClassNames.img, 'AvatarClassNames.img', isPlaying);
  return (
    <div className="relative rounded-full ml-2 group '">
      <Avatar
        src={props.imgSrc}
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
  );
}

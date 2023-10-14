import { Progress } from '@nextui-org/react';
import { useRef, useState } from 'react';
import { PAHButton } from './PAHButton';

const AudioRecorder = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [recordTime, setRecordTime] = useState(0);
  const mediaRecorder = useRef(null);
  const recordInterval = useRef(null);
  const audio = useRef(null);
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    const formattedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const formattedSeconds =
      remainingSeconds < 10 ? `0${remainingSeconds}` : `${remainingSeconds}`;

    return `${formattedMinutes}:${formattedSeconds}`;
  };

  const startRecording = async () => {
    // 请求用户授权访问麦克风
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    mediaRecorder.current = new MediaRecorder(stream);
    setRecordTime(0);
    mediaRecorder.current.start();
    recordInterval.current = setInterval(() => {
      setRecordTime((prev) => {
        return prev + 1;
      });
    }, 1000);
    setIsRecording(true);
    setIsPlaying(true);
    mediaRecorder.current.ondataavailable = (e) => {
      console.log(e);
      const audioUrl = URL.createObjectURL(e.data);
      // 创建一个音频元素来播放录制的音频
      audio.current = new Audio(audioUrl);
      // audio.play();
    };
  };

  const playRecording = () => {
    console.log('hello', mediaRecorder.current);
    audio.current && audio.current.play();
  };
  const stopRecording = () => {
    setIsPlaying(false);
    if (mediaRecorder.current) {
      mediaRecorder.current.stop();
      clearInterval(recordInterval.current);
    }
  };
  const exitRecording = () => {
    if (mediaRecorder.current) {
      mediaRecorder.current.stop();
      setIsRecording(false);
      clearInterval(recordInterval.current);
      setRecordTime(0);
    }
  };
  const uploadRecording = () => {
    mediaRecorder.current.ondataavailable = (e) => {
      const audioUrl = URL.createObjectURL(e.data);
      const audio = new Audio(audioUrl);
      audio.play();
    };
  };

  return (
    <div>
      {isRecording ? (
        <div className="flex items-center justify-between  p-4 space-x-4">
          {/* 左侧的按钮组 */}
          <div>
            <PAHButton
              frontColor="bg-black"
              backColor="bg-white-500"
              width="w-16"
              textColor="text-white"
              onClick={exitRecording}
            >
              Back
            </PAHButton>
          </div>
          {/* <div className="bg-white p-3 rounded cursor-pointer">Back</div> */}
          {/* 中间的计时器 */}
          <div className="flex bg-black w-full h-14 items-center justify-between rounded-medium">
            {!isPlaying ? (
              <div
                className=" px-2 rounded cursor-pointer text-white text-2xl  m-2 w-12 text-center"
                onClick={playRecording}
              >
                ▶️
              </div>
            ) : (
              <div
                className=" px-2 rounded cursor-pointer text-white text-2xl  m-2 w-12 text-center"
                onClick={stopRecording}
              >
                ⏸
              </div>
            )}

            <Progress
              size="lg"
              aria-label="recording..."
              color="default"
              maxValue={60}
              value={recordTime}
              // showValueLabel={true}
            />
            <div className="bg-black p-3 rounded-medium mr-2 text-white">
              {formatTime(recordTime)}
            </div>
          </div>

          {/* 右侧的按钮组 */}

          <PAHButton
            frontColor="bg-black"
            backColor="bg-white-500"
            width="w-20"
            textColor="text-white"
            onClick={uploadRecording}
          >
            upload
          </PAHButton>
        </div>
      ) : (
        <PAHButton
          onClick={startRecording}
          frontColor="bg-black"
          backColor="bg-white-500"
          width="w-44"
          textColor="text-white"
        >
          Start
        </PAHButton>
      )}
    </div>
  );
};

export default AudioRecorder;

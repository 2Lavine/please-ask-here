import '../app/globals.css';
import { QuestionCard } from '../components/QuestionCard';

const args = {
  userName: 'User Name',
  answerTime: 'Answer Time',
  questionTime: '1:25',
  questionDes: 'How awesome is Jason Calacanis at investing and podcasting?',
  imgSrc: 'https://openask.me/assets/donation-5@2x-f6c8ed0a.png',
  big: false,
  isDetail: false,
};
const Template = (args) => (
  <div className="w-[42rem]">
    <QuestionCard {...args} />
  </div>
);

export const Story = {
  render: Template,
  args: args,
};

export default {
  title: 'Components/QuestionCard',
  component: QuestionCard,
  args: {},
};

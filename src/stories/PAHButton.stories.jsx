import { PAHButton } from '@/components/PAHButton';
const args = {
  userName: 'User Name',
  answerTime: 'Answer Time',
  questionTime: '1:25',
  imgSrc: 'https://openask.me/assets/donation-5@2x-f6c8ed0a.png',
  big: false,
  frontColor: 'bg-black',
  backColor: 'bg-white',
};

export default {
  title: 'Components/PAHButton',
  component: PAHButton,
  args: args,
};

const Template = (args) => (
  <div className="w-44">
    <PAHButton {...args}>Click me</PAHButton>
  </div>
);

export const Story = {
  render: Template,
};
Story.args = {
  args,
};
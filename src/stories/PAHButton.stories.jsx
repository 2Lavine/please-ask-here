import { PAHButton } from '@/components/PAHButton';
const args = {
  userName: 'User Name',
  answerTime: 'Answer Time',
  questionTime: '1:25',
  imgSrc: 'https://openask.me/assets/donation-5@2x-f6c8ed0a.png',
  big: false,
};

export default {
  title: 'Components/PAHButton',
  component: PAHButton,
  args: args,
};

const Template = (args) => <PAHButton {...args} />;

export const Story = {
  render: Template,
};
Story.args = {
  args,
};

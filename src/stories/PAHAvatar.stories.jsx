import { PAHAvatar } from '../components/PAHAvatar';

const args = {
  userName: 'User Name',
  answerTime: 'Answer Time',
  questionTime: '1:25',
  imgSrc: 'https://openask.me/assets/donation-5@2x-f6c8ed0a.png',
  big: false,
};
export default {
  title: 'Components/PAHAvatar',
  component: PAHAvatar,
  args,
};

const Template = (args) => <PAHAvatar {...args} />;

export const Story = {
  render: Template,
};
Story.args = {
  args,
};

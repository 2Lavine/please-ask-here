import { UserCard } from '../components/UserCard';

const args = {
  userName: 'User Name',
  answerTime: 'Answer Time',
  questionTime: '1:25',
  imgSrc: 'https://openask.me/assets/donation-5@2x-f6c8ed0a.png',
  big: false,
};
export default {
  title: 'Components/UserCard',
  component: UserCard,
  args,
};

const Template = (args) => <UserCard {...args} />;

export const Story = {
  render: Template,
};
Story.args = {
  args,
};

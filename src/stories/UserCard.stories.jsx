import { UserCard } from '../components/UserCard';

const args = {
  followers: 46,
  answersNumber: 47,
  userDescription: `Founder of @ProductHunt. Investor at @WeekendFund. Writing about fun(d) stuff at t.co/tsunRiiECA with @vedikaja_in. Say hi! Ask me about: StartupBuilding, Fundraising, EarlyStageInvesting`,
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

import { UserDetailCard } from '../components/UserDetailCard';

const args = {
  followers: 46,
  answersNumber: 47,
  imgSrc: 'https://openask.me/assets/donation-5@2x-f6c8ed0a.png',
  big: false,
  userDescription: `Entrepreneur, Investor, Father to 3 daughters, cyclist, surfer, poker player, and life hacker. Pre-seed up to $500K. pitch me: t.co/pat53we2xs.All proceeds to Charity. 
  Ask me about: StartupBuilding, Fundraising, EarlyStageInvesting`,
};
export default {
  title: 'Components/UserDetailCard',
  component: UserDetailCard,
  args,
};

const Template = (args) => (
  <div className="w-[732px]">
    <UserDetailCard {...args} />
  </div>
);

export const Story = {
  render: Template,
};
Story.args = {
  args,
};

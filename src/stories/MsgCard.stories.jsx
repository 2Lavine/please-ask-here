import '../app/globals.css';
import { MsgCard } from '../components/MsgCard';

const args = {
  title: 'PLease ASK',
  imgSrc: 'https://openask.me/assets/donation-5@2x-f6c8ed0a.png',
  description: 'Question has earned',
  amount: '$876.1',
};
export const MsgCardPrimay = {
  render: (args) => <MsgCard {...args} />,
};
export default {
  title: 'Components/Card',
  component: MsgCard,
  args: args,
};

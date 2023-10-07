import { PAHButton } from '@/components/PAHButton';
const args = {
  frontColor: 'bg-black',
  backColor: 'bg-white',
  width: 'w-44',
};

export default {
  title: 'Components/PAHButton',
  component: PAHButton,
  args: args,
};

const Template = (args) => (
  <div className="text-white">
    <PAHButton {...args}>Click me</PAHButton>
  </div>
);

export const Story = {
  render: Template,
};
Story.args = {
  args,
};

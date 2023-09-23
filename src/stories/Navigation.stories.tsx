// import Navigation from '@/components/Navigation';
import Nav from '@/components/Navigation';
import type { Meta, StoryObj } from '@storybook/react';
import { SessionProvider } from 'next-auth/react';
SessionProvider;
const Navigation = Nav;
console.log(typeof Navigation, 'hhhhhhh');
const meta: Meta<typeof Navigation> = {
  component: Navigation,
};
type Story = StoryObj<typeof Navigation>;
export default meta;
export const Normal: Story = {
  render: () => (
    <SessionProvider>
      <Navigation />
    </SessionProvider>
  ),
};

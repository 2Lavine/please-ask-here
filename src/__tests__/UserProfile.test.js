import UserProfile from '@/components/UserProfile';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { SessionProvider } from 'next-auth/react';

// 如果需要，你可以在这里添加其他的 mock 实现
// jest.mock('next/link', () => ({ children }) => children);

const mockSession = {
  user: {
    name: 'testUser',
    email: 'test@example.com',
    image: 'path_to_image',
  },
};

describe('UserProfile component', () => {
  test('renders user data when available', () => {
    render(
      <SessionProvider session={mockSession}>
        <UserProfile />
      </SessionProvider>
    );

    // 进行必要的断言以确认组件是否按预期渲染
    // 例如，检查电子邮件、用户名或头像是否在文档中

    const nameElement = screen.getByText('Logout');
    expect(nameElement).toBeInTheDocument();

    // 如果头像是通过 'img' 标签渲染的，你可以尝试以下方式来确认图片是否正确渲染
    // const avatarElement = screen.getByRole('img');
    // expect(avatarElement).toHaveAttribute('src', mockSession.user.image);
  });

  // 添加任何其他测试案例
});

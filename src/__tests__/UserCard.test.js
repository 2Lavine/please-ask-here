import Sidebar from '@/components/Sidebar';
import UserProfile from '@/components/UserProfile';
import { render } from '@testing-library/react';

// Mock the UserProfile component
jest.mock('../components/UserProfile', () => {
  return jest.fn(() => <div>UserProfile Component</div>);
});

describe('Sidebar component', () => {
  beforeEach(() => {
    // Clear all instances and calls to constructor and all methods:
    UserProfile.mockClear();
  });

  it('should render Sidebar with the UserProfile component', () => {
    render(<Sidebar />);

    // Check if the UserProfile component was called
    expect(UserProfile).toHaveBeenCalledTimes(1);
  });
});

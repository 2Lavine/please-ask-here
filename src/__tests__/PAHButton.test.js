import { PAHButton } from '@/components/PAHButton'; // 请用实际路径替换
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';

describe('PAHButton', () => {
  test('renders with children correctly', () => {
    const text = 'Click me!';
    render(<PAHButton>{text}</PAHButton>);

    expect(screen.getByText(text)).toBeInTheDocument();
  });

  test('handles onClick event', () => {
    const handleClick = jest.fn();
    render(<PAHButton onClick={handleClick}>Click me</PAHButton>);

    fireEvent.click(screen.getByText(/click me/i));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('applies default styles', () => {
    render(<PAHButton>Styled Button</PAHButton>);
    const button = screen.getByText('Styled Button').parentNode;
    expect(button).toHaveClass('w-28', 'text-white');
  });

  test('applies custom styles', () => {
    render(
      <PAHButton
        frontColor="bg-red"
        backColor="bg-green"
        textColor="text-red"
        width="w-48"
      >
        Styled Button
      </PAHButton>
    );

    const button = screen.getByText('Styled Button').parentNode;
    expect(button).toHaveClass('cursor-pointer', 'text-red', 'w-48');
    // expect(button.nextSibling).toHaveClass('bg-green');
  });
});

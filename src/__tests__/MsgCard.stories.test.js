import { composeStory } from '@storybook/react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
// import Card.stories
import Meta, { MsgCardPrimay } from '@/stories/MsgCard.stories';

const Card = composeStory(MsgCardPrimay, Meta);

describe('MsgCard', () => {
  it('renders the component correctly', () => {
    render(<Card />);
    // Check if the title is rendered correctly
    expect(screen.getByText(Card.args.title)).toBeInTheDocument();
    // expect(screen.getByText(123)).toBeInTheDocument();
    // Check if the image is rendered correctly
    const image = screen.getByAltText('logo');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', Card.args.imgSrc);
    // Check if the description is rendered correctly
    expect(screen.getByText(Card.args.description)).toBeInTheDocument();
    // Check if the amount is rendered correctly
    expect(screen.getByText(Card.args.amount)).toBeInTheDocument();
  });
});

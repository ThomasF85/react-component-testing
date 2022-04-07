import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Player from './Player';

describe('Player', () => {
  it('calls callbacks when increasing or decreasing score', () => {
    const decreaseCallback = jest.fn();
    const increaseCallback = jest.fn();
    render(
      <Player
        name="John"
        score="2"
        onDecreasePlayerScore={decreaseCallback}
        onIncreasePlayerScore={increaseCallback}
      />
    );

    const increaseButton = screen.getByRole('button', {
      name: /increase score/i,
    });
    const decreaseButton = screen.getByRole('button', {
      name: /decrease score/i,
    });

    // click increase button twice and decrease button once and check that
    // the respective functions have been called twice / once
  });
});

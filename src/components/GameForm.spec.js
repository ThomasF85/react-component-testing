import GameForm from './GameForm';
import { render, screen } from '@testing-library/react';

describe('GameForm', () => {
  it('renders two input fields and a button', () => {
    render(<GameForm />);

    const nameOfGameInput = screen.getByLabelText(/name of game/i);
    const submitButton = screen.getByRole('button', { name: /create/i });

    expect(nameOfGameInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();

    // Exercise:
    // check for another input with the label text: "player names, separated by comma"
  });
});

import GameForm from './GameForm';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';

describe('GameForm', () => {
  it('renders two input fields and a button', () => {
    render(<GameForm />);

    const nameOfGameInput = screen.getByLabelText(/name of game/i);
    const playerNamesInput = screen.getByLabelText(
      /player names, separated by comma/i
    );
    const submitButton = screen.getByRole('button', { name: /create/i });

    expect(nameOfGameInput).toBeInTheDocument();
    expect(playerNamesInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  it('submits form data when every field is filled out', () => {
    const handleCreate = jest.fn();
    render(<GameForm onCreateGame={handleCreate} />);

    const nameOfGameInput = screen.getByLabelText(/name of game/i);
    const playerNamesInput = screen.getByLabelText(/player names/i);
    const submitButton = screen.getByRole('button', { name: /create/i });

    userEvent.type(nameOfGameInput, 'Dodelido');
    userEvent.type(playerNamesInput, 'Jane, John');
    userEvent.click(submitButton);

    expect(handleCreate).toHaveBeenCalledTimes(1);

    expect(handleCreate).toHaveBeenCalledWith({
      nameOfGame: 'Dodelido',
      playerNames: ['Jane', 'John'],
    });
  });

  it('does not submit form if one input field is left empty', () => {
    // Check that the function behind the prop onCreateGame is not being called
    // if one input field is empty
  });
});

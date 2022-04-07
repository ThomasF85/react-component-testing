import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import HistoryEntry from './HistoryEntry';

describe('HistoryEntry', () => {
  it('renders name of game and "show score" button only', () => {
    render(
      <HistoryEntry
        nameOfGame="Dodelido"
        players={[
          { name: 'John', score: 2, id: 'xyz' },
          { name: 'Jane', score: 1, id: 'abc' },
        ]}
      />
    );

    const nameOfGame = screen.getByText(/dodelido/i);
    const button = screen.getByRole('button', { name: /show score/i });

    expect(nameOfGame).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  it('renders player names and scores after button click', () => {
    render(
      <HistoryEntry
        nameOfGame="Dodelido"
        players={[
          { name: 'John', score: 2, id: 'xyz' },
          { name: 'Jane', score: 1, id: 'abc' },
        ]}
      />
    );

    const noPlayer1 = screen.queryByText(/john/i);
    const noPlayer2 = screen.queryByText(/jane/i);
    const noPlayerScore1 = screen.queryByText(/2/i);
    const noPlayerScore2 = screen.queryByText(/1/i);

    expect(noPlayer1).not.toBeInTheDocument();
    expect(noPlayer2).not.toBeInTheDocument();
    expect(noPlayerScore1).not.toBeInTheDocument();
    expect(noPlayerScore2).not.toBeInTheDocument();

    const button = screen.getByRole('button', { name: /show score/i });
    userEvent.click(button);

    // ToDo: Check that player1 and player2 and their scores are being rendered after button click
  });
});

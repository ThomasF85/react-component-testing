import { render } from '@testing-library/react';
import HistoryEntry from './HistoryEntry';

describe('HistoryEntry', () => {
  it('renders name of game and "show score" button', () => {
    render(
      <HistoryEntry
        nameOfGame="Dodelido"
        players={[
          { name: 'John', score: 2, id: 'xyz' },
          { name: 'Jane', score: 1, id: 'abc' },
        ]}
      />
    );

    // TODO: get nameOfGame and button and check that they are present
  });
});

import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Navigation from './Navigation';

describe('Navigation', () => {
  it('renders a navigation with two links', () => {
    render(
      <MemoryRouter>
        <Navigation />
      </MemoryRouter>
    );

    const playLink = screen.getByRole('link', { name: /play/i });
    const historyLink = screen.getByRole('link', { name: /history/i });

    expect(playLink).toBeInTheDocument();
    expect(historyLink).toBeInTheDocument();
  });
});

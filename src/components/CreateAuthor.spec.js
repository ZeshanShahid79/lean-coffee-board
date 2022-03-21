import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CreateAuthor from './CreateAuthor';

describe('CreateAuthor', () => {
  it('shows a text, the author and a color', () => {
    const callback = jest.fn();
    render(<CreateAuthor onSubmit={callback} />);

    const form = screen.getByRole('form', { name: 'Create new entry' });
    expect(form).toBeInTheDocument();

    const input = screen.getByLabelText('Entry text');
    userEvent.type(input, 'Lorem ipsum dolor sit.{enter}');

    expect(form).toContainElement(input);

    expect(callback).toHaveBeenCalledWith('Lorem ipsum dolor sit.');
  });
});

import { render } from '@testing-library/react';


test('renders initial count of 0', () => {
    const { getByTestId } = render(<Counter />);
    const countElement = getByTestId('count');
    expect(countElement).toHaveTextContent('0');
});
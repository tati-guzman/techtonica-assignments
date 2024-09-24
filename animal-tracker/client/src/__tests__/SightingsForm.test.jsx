//Import functionality from testing libraries
import { render, screen, fireEvent } from '@testing-library/react'
import { expect, test, vi } from 'vitest';

//Import components
import SightingsForm from '../components/SightingsForm.jsx';

//TEST ONE: Does the "Clear Form" button clear the fields?
test("clears fields correctly", () => {
    render(<SightingsForm />);

    const inputLocation = screen.getByPlaceholderText('Any location information is accepted!');
    fireEvent.input(inputLocation, { target: { value: 'Sample Location' }});

    const clearButton = screen.getByRole('button', {
        name: /clear form/i
    });
    fireEvent.click(clearButton);

    expect(inputLocation.value).toBe('');
})
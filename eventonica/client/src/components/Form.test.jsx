//Import functionality from testing libraries
import { render, screen, fireEvent } from '@testing-library/react'

//Import components
import App from '../App.jsx'

//TEST ONE: Does the "Clear Changes" button clear the fields?

const mockInput = [
    { text: "Sample" },
    { text: "Testing"}
]

test("clears fields correctly", () => {
    render(<App />);

    const inputField = screen.getByPlaceholderText('Event Name');
    fireEvent.input(inputField, { target: { value: mockInput[0].text }});

    const cancelButton = screen.getByRole('button', {
        name: /cancel changes/i
    });
    fireEvent.click(cancelButton);

    expect(inputField.value).toBe('');
})
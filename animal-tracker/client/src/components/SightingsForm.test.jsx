import React from 'react'; // This is essential for JSX

//Import functionality from testing libraries
import { render, screen, fireEvent } from '@testing-library/react'
import { expect, test, vi } from 'vitest';

//Import components
// import Landing from "./Landing.jsx"
import SightingsForm from './SightingsForm.jsx';


//TEST ONE: Does the "Clear Form" button clear the fields?
console.log("test file");
test("clears fields correctly", () => {
    console.log("will render");
    render(<SightingsForm />);

    const inputLocation = screen.getByPlaceholderText('Any location information is accepted!');
    fireEvent.input(inputLocation, { target: { value: 'Sample Location' }});

    const clearButton = screen.getByRole('button', {
        name: /clear form/i
    });
    fireEvent.click(clearButton);

    expect(inputLocation.value).toBe('');
})
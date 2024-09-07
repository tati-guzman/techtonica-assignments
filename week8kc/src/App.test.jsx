//Import functionality from testing libraries
import { describe, it, expect, vi, spyOn } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'

//Import components
import App from './App';
import Form, { handleSubmit } from './components/form';
import Header from './components/header';
import Item from './components/item';

//Create mock data manually
const mockItems = [
    { text: "my cohort" },
    { text: "Techtonica staff" },
    { text: "supportive friends and family"}
];

//TEST ONE: Does the header component render correctly?

describe("header", () => {
    it("renders header component correctly", () => {
        render(<Header />);  
    })
})

//TEST TWO: Are the items in the list (item component) rendered correctly?

//Note: This test is using mock data manually coded above!

test("renders mock items correctly", () => {
    render(<App />);

    const inputField = screen.getByPlaceholderText('Enter an item');
    fireEvent.input(inputField, { target: { value: mockItems[0].text } });

    const submitButton = screen.getByRole( "button", {
        name: /Submit/
    })
    fireEvent.click(submitButton);

    expect(screen.getByText(mockItems[0].text));
})

//TEST THREE: Does the form component work or render correctly?

describe("form", () => {
    it("renders form component correctly", () => {
        render(<Form />);
    })
})

//EXTRA TESTS: Test any other functionality or edge case you think is necessary.

//TEST FOUR: Functionality - Does the submit button render correctly?

test("renders submit button correctly", () => {
    render(<App />);
    screen.getByRole("button", {
        name: /Submit/
    })
}) 

//TEST FIVE: Edge Case - If nothing is inputted, does the submit button do anything?

test("empty string cannot be submitted", () => {
    const mockSubmitHandler = vi.fn();

    render(<App />);

    const inputField = screen.getByPlaceholderText('Enter an item');
    fireEvent.input(inputField, { target: { value: "" } });

    const submitButton = screen.getByRole( "button", {
        name: /Submit/
    })
    fireEvent.click(submitButton);

    expect(mockSubmitHandler).not.toHaveBeenCalled();
})

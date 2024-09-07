//Import functionality from testing libraries
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'

//Import components
import App from './App';
import form from './components/form';
import header from './components/header';
import item from './components/item';


//TEST ONE: Does the header component render correctly?

describe("header", () => {
    it("renders header component correctly", () => {
        render(<header />);  
    })
})

//TEST TWO: Are the items in the list (item component) render correctly?



//TEST THREE: Does the form component work or render correctly?

describe("form", () => {
    it("renders form component correctly", () => {
        render(<form />);
    })
})

//TEST FOUR: Test any other functionality or edge case you think is necessary.

// describe('Your Component', () => {
//     it('renders correctly', () => {
//         const { getByText } = render(<YourComponent />)
//         expect(getByText('Hello World')).toBeInTheDocument()
//     })
// })


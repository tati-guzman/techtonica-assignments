//Import functionality from testing libraries
import { describe, it } from 'vitest'
import { render } from '@testing-library/react'

//Import components
import App from './App.jsx';

//TEST ONE: Does the App render without crashing?
describe("app", () => {
    it("renders without crashing", () => {
        render(<App />);
    })
})

//This test passes but returns an error parsing the URL to fetch all event data. Need to fix in the future and add tests to check that as well!


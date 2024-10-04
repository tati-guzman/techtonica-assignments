//Import all testing dependencies needed
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

//Import component being tested
import HomePage from '../components/HomePage.jsx';

describe('HomePage', () => {
    test('renders all three images on home page', () => {
        render(<HomePage />);

        const firstImage = screen.getByAltText(/a small tan dog/i);
        const secondImage = screen.getByAltText(/an adult dog is prancing/i);
        const thirdImage = screen.getByAltText(/a tan adult dog is laying/i);

        expect(firstImage).toBeInTheDocument();
        expect(secondImage).toBeInTheDocument();
        expect(thirdImage).toBeInTheDocument();
    })
})
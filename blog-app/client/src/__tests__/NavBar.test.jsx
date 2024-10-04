//Import all testing dependencies needed
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

//Import component being tested
import NavBar from '../components/NavBar.jsx';

describe('Navigation Bar', () => {

    test('Nav Bar contains both a Posts button and Create a Form button', () => {
        render(<NavBar />);

        //Check for rendering of the "View All Posts" button
        expect(screen.getByRole('button', { name: /view all posts/i })).toBeInTheDocument();

        //Check for rendering of the "Create a Post" button
        expect(screen.getByRole('button', { name: /create a post/i })).toBeInTheDocument();

    })

})
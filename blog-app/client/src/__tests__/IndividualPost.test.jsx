//Import all testing dependencies needed
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

//Import component being tested
import IndividualPost from '../components/IndividualPost.jsx';

describe('Individual Post', () => {
    //Set up mock post to use in rendering
    const selectedPost = {
        "title": "Testing out the Daisy blog",
        "content": "This has been a crazy experience! I got to work on starting at pictures of my dog all day.",
        "created_at": "2023-10-01T12:00:00Z"
    }

    test('Date is being parsed and rendered as Month Day, Year', () => {
        render(<IndividualPost selectedPost={selectedPost} />);

        expect(screen.getByRole('heading', { level: 4 })).toHaveTextContent('October 1, 2023');
    })
})
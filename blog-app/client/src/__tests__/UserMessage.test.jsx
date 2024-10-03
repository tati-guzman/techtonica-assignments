//Import all testing dependencies needed
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';

//Import component being tested
import UserMessage from '../components/UserMessage.jsx';

describe('User Message', () => {
    //Mock the onClose functionality
    const mockOnClose = vi.fn();
  
    test('renders modal when isOpen is true', () => {
        //Set the modal to be celebrating a successful submission creating a post
        render(
        <UserMessage 
          submitStatus={true} 
          isOpen={true} 
          onClose={mockOnClose} 
          message='Check out the "All Posts" page to find your submission!' 
        />
      );
  
      //Check the content in what is rendered
      expect(screen.getByText("Success! Thanks for submitting content!")).toBeInTheDocument();
      expect(screen.getByText('Check out the "All Posts" page to find your submission!')).toBeInTheDocument();
      
    });
})
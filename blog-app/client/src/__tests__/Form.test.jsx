//Import all testing dependencies needed
import '@testing-library/jest-dom';
import { render, screen, fireEvent, act } from '@testing-library/react';

//Import component being tested
import Form from '../components/Form.jsx';

describe('Form', () => {
    
    test('cancel button will clear form', () => {
        render(<Form />);

        //Mock input text into title and content area
        act(() => {
            fireEvent.change(screen.getByLabelText(/title/i), { target: {value : 'Another Mock Post' }});
            fireEvent.change(screen.getByLabelText(/content/i), { target: { value: 'Mock content' }});

            //Click the cancel button to clear the form
            fireEvent.click(screen.getByRole('button', { name: /cancel/i }));
        });

        expect(screen.getByLabelText(/title/i).value).toBe('');
        expect(screen.getByLabelText(/content/i).value).toBe('');
    })
})
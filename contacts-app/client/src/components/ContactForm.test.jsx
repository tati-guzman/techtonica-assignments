//Import all testing dependencies needed
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { vi } from 'vitest';
import ContactForm from './ContactForm.jsx';

describe('ContactForm', () => {
    //Create mock environment for states
    const setSelectedIndividual = vi.fn();
    const setComponent = vi.fn();

    //Reset all mock environments before each test is run
    beforeEach(() => {
        vi.clearAllMocks();
    });
    
    test('renders the form with all inputs', () => {
        render(<ContactForm selectedIndividual={null} setSelectedIndividual={setSelectedIndividual} setComponent={setComponent} />);
        
        expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/phone number/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/birthday notes/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/we talked recently/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/we haven't talked in a while/i)).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /submit contact/i })).toBeInTheDocument();
    });

    test('updates input values when inputted', () => {
        render(<ContactForm selectedIndividual={null} setSelectedIndividual={setSelectedIndividual} setComponent={setComponent} />);

        const nameInput = screen.getByLabelText(/name/i);
        fireEvent.change(nameInput, { target: { value: 'Adele' } });
        expect(nameInput.value).toBe('Adele');
    });

    test('cancels and clears the form', () => {
        render(<ContactForm selectedIndividual={null} setSelectedIndividual={setSelectedIndividual} setComponent={setComponent} />);

        fireEvent.change(screen.getByLabelText(/name/i), { target: { value: 'Beyonce' } });
        fireEvent.click(screen.getByRole('button', { name: /cancel/i }));

        expect(screen.getByLabelText(/name/i).value).toBe('');
    });
});

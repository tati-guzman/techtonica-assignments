//Import functionality from testing libraries
import { render, screen } from '@testing-library/react'
import { vi } from 'vitest';

//Import components
import IndividualsForm from '../components/IndividualsForm.jsx';

//TEST: Does data for a selected individual get pre-populated into the form?

//Mock function to simulate state updates
const setAllIndividualsMock = vi.fn();
const setSelectedIndividualMock = vi.fn();

test('updates form fields when there is a selectedIndividual', () => {
    const selectedIndividual = {
        animal_id: '786',
        nickname: 'Cootie',
        common_name: 'Panda',
        scientist_name: 'Dr. Cootie Patootie'
    };

    //Render the component with the mock props
    render(
        <IndividualsForm 
            selectedIndividual={selectedIndividual} 
            setSelectedIndividual={setSelectedIndividualMock} 
            setAllIndividuals={setAllIndividualsMock}
        />
    );

    //Check that the form fields are populated with the selected individual's data
    expect(screen.getByLabelText(/animal id/i).value).toBe('786');
    expect(screen.getByLabelText(/individual's nickname/i).value).toBe('Cootie');
    expect(screen.getByLabelText(/common name/i).value).toBe('Panda');
    expect(screen.getByLabelText(/primary scientist/i).value).toBe('Dr. Cootie Patootie');
});

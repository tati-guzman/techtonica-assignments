//Import all necessary dependencies, functionalities, and files
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { vi } from 'vitest';
import UserSelection from './UserSelection.jsx';

describe('UserSelection', () => {
    //Create mock environments and mock data
    const playerInfo = [{ username: 'Player1' }, { username: 'Player2' }];
    const onStart = vi.fn();
    const setCurrentPlayer = vi.fn();
    const setAddingNewUser = vi.fn();

    //After each test, clear all the mock environments
    beforeEach(() => {
        vi.clearAllMocks();
    });

    test('renders the dropdown and start button', () => {
        render(
            <UserSelection 
                playerInfo={playerInfo} 
                onStart={onStart} 
                setCurrentPlayer={setCurrentPlayer} 
                addingNewUser={false} 
                setAddingNewUser={setAddingNewUser} 
            />
        );

        expect(screen.getByLabelText(/choose your username/i)).toBeInTheDocument();
        expect(screen.getByRole('combobox')).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /start game with username/i })).toBeInTheDocument();
    });

    test('displays existing usernames in the dropdown', () => {
        render(
            <UserSelection 
                playerInfo={playerInfo} 
                onStart={onStart} 
                setCurrentPlayer={setCurrentPlayer} 
                addingNewUser={false} 
                setAddingNewUser={setAddingNewUser} 
            />
        );

        expect(screen.getByRole('option', { name: /player1/i })).toBeInTheDocument();
        expect(screen.getByRole('option', { name: /player2/i })).toBeInTheDocument();
        expect(screen.getByRole('option', { name: /add new user/i })).toBeInTheDocument();
    });

    test('handles input change for new username', () => {
        //Render this one with the addingNewUser state as true so the input field is available
        render(
            <UserSelection 
                playerInfo={playerInfo} 
                onStart={onStart} 
                setCurrentPlayer={setCurrentPlayer} 
                addingNewUser={true} 
                setAddingNewUser={setAddingNewUser} 
            />
        );

        const newUserInput = screen.getByLabelText(/add new username/i);
        fireEvent.change(newUserInput, { target: { value: 'NewPlayer' } });

        expect(newUserInput.value).toBe('NewPlayer');
    });
});

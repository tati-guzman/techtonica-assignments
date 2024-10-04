//Import all testing dependencies needed
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

//Import component being tested
import App from '../App.jsx';

describe ('App', () => {
    test ('App renders without crashing', () => {
        render(<App />);
    })
})
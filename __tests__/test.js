import "regenerator-runtime/runtime";
import React from 'react';
import { Home } from '../pages/Home';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

test('Should Task to be added', async () => {
    // render the application
    render(<Home />);

    // grab the elements that are always there with .getByX
    const button = screen.getByRole('button', { name: /add task/i });
    const input = screen.getByPlaceholderText(/add task/i);
    
    const submit = screen.getByRole('submit')

    // simulate user interactions with userEvent
    userEvent.type(input, 'I have to call my mom.');
    userEvent.click(submit);

    // grab elements that will asynchronously appera
    const addedThought = await screen.findByText('I have to call my mom.');
    // use special jest-dom matchers like .toBeInTheDocument()
    expect(addedThought).toBeInTheDocument();

    // test elements that will asynchronously disappear
    await waitFor(() => {
        const thought = screen.queryByText('I have to call my mom.');
        expect(thought).toBeNull();
    });
});
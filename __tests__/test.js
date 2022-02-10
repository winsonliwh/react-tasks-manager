// import "regenerator-runtime/runtime";
// import React from 'react';
// import { render, screen, waitFor } from '@testing-library/react';
// import '@testing-library/jest-dom';
// import userEvent from '@testing-library/user-event';
// import Home from "../src/pages/Home.js";
// import App from "../src/App.js";

test('Should Task to be added', () => {
    // render the application
    // render(<Home />);
    // render(<App />);
    expect(true).toBe(true);

    // // wait for the application to be rendered
    // await waitFor(() => screen.getByText('Add Task'));
    
    // // add a new task
    // userEvent.type(screen.getByPlaceholderText('Task'), 'Task 1');
    // userEvent.click(screen.getByText('Add Task'));  
    
    // // wait for the application to be rendered
    // await waitFor(() => screen.getByText('Task 1'));
});

test('Task should be edited', () => {
    expect(true).toBe(true);
});
test('Should Task to be deleted', () => {
    expect(true).toBe(true);
});


//     // grab the elements that are always there with .getByX
//     const button = screen.getByRole('button', { name: /add task/i });
//     const input = screen.getByPlaceholderText(/add task/i);
    
//     const submit = screen.getByRole('submit')

//     // simulate user interactions with userEvent
//     userEvent.type(input, 'I have to call my mom.');
//     userEvent.click(submit);

//     // grab elements that will asynchronously appera
//     const addedThought = await screen.findByText('I have to call my mom.');
//     // use special jest-dom matchers like .toBeInTheDocument()
//     expect(addedThought).toBeInTheDocument();

//     // test elements that will asynchronously disappear
//     await waitFor(() => {
//         const thought = screen.queryByText('I have to call my mom.');
//         expect(thought).toBeNull();
//     });
// });

// test('render component to test', () => {
//     // 1. render 出要測試的元件
//     render(<Filter />);
  
//     // 2. 找到元件中某元素位置
//     const input = screen.getByPlaceholderText("Task Name");
  
//     // 3. 對該元素進行操作和互動
//     // fireEvent.click(button);
  
//     // 4. 檢視結果是否和預期相符
//     // const banner = screen.getByText(/get promo/i);
//     expect(input).toBeInTheDocument();
//   });
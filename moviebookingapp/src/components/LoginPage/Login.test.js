import { render, screen, fireEvent } from "@testing-library/react";

import Login from "./Login";
import {BrowserRouter } from "react-router-dom";

test('render login button', () => {
    //Arrange
    render(
        <BrowserRouter>
            <Login />
        </BrowserRouter>
    )

    //Assert
    const passwordLabel = screen.getByText('Welcome to the Movie Booking App');
    expect(passwordLabel).toBeInTheDocument();
})


describe("testing login action by giving dummy values", ()=>{
    test('should update credentials state on input change', () => {
        render(
            <BrowserRouter>
                <Login />
            </BrowserRouter>
        )
    
        const loginIdInput = screen.getByTestId('loginId-element');
        const passwordInput = screen.getByTestId('password-element');
    
        fireEvent.change(loginIdInput, { target: { value: 'testuser' } });
        fireEvent.change(passwordInput, { target: { value: 'testpassword' } });
    
        expect(loginIdInput.value).toBe('testuser');
        expect(passwordInput.value).toBe('testpassword');
      });
})

import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Main, { initializeTimes, updateTimes } from './BookingPage';
import { fetchAPI, submitAPI } from './api';
import { MemoryRouter } from 'react-router-dom'; // Import MemoryRouter
import { useNavigate } from 'react-router-dom';

// Mock API functions
jest.mock('./api', () => ({
  ...jest.requireActual('./api'),
  fetchAPI: jest.fn(),
  submitAPI: jest.fn(),
}));

// Mock react-router-dom functions
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}));

describe('BookingPage', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('initializeTimes returns the correct initial times', async () => {
    const expectedTimes = ['12:00', '13:00', '14:00', '18:00', '19:00', '20:00', '21:00'];
    fetchAPI.mockResolvedValue(expectedTimes);

    const times = await initializeTimes();
    expect(times).toEqual(expectedTimes);
    expect(fetchAPI).toHaveBeenCalledTimes(1);
  });

  test('updateTimes returns the updated state with new times', () => {
    const currentState = ['12:00', '13:00', '14:00'];
    const newTimes = ['15:00', '16:00'];
    const action = { type: 'UPDATE_TIMES', payload: newTimes };
    const updatedState = updateTimes(currentState, action);

    expect(updatedState).toEqual(newTimes);
  });

  test('should apply HTML5 validation attributes', () => {
    render(
      <MemoryRouter>
        <Main />
      </MemoryRouter>
    );

    const seatsInput = screen.getByLabelText('Number of seats');
    expect(seatsInput).toHaveAttribute('required');
    expect(seatsInput).toHaveAttribute('min', '0');

    const dateInput = screen.getByLabelText('Reservation date');
    expect(dateInput).toHaveAttribute('required');

    const timeSelect = screen.getByLabelText('Reservation time');
    expect(timeSelect).toHaveAttribute('required');

    const firstNameInput = screen.getByLabelText('First name');
    expect(firstNameInput).toHaveAttribute('required');

    const lastNameInput = screen.getByLabelText('Last name');
    expect(lastNameInput).toHaveAttribute('required');

    const emailInput = screen.getByLabelText('Email');
    expect(emailInput).toHaveAttribute('required');

    const contactNumberInput = screen.getByLabelText('Contact number');
    expect(contactNumberInput).toHaveAttribute('required');
  });

  test('should validate form input using JavaScript functions', async () => {
    render(
      <MemoryRouter>
        <Main />
      </MemoryRouter>
    );
  
    // Fill out the form
    fireEvent.change(screen.getByLabelText('Number of seats'), { target: { value: '2' } });
    fireEvent.change(screen.getByLabelText('Reservation date'), { target: { value: '2023-12-31' } });
    fireEvent.change(screen.getByLabelText('Reservation time'), { target: { value: '18:00' } });
    fireEvent.change(screen.getByLabelText('Occasion'), { target: { value: 'Birthday' } });
    fireEvent.change(screen.getByLabelText('First name'), { target: { value: 'John' } });
    fireEvent.change(screen.getByLabelText('Last name'), { target: { value: 'Doe' } });
    fireEvent.change(screen.getByLabelText('Email'), { target: { value: 'john.doe@example.com' } });
    fireEvent.change(screen.getByLabelText('Contact number'), { target: { value: '1234567890' } });
    fireEvent.click(screen.getByLabelText(/agree to terms and conditions/i));
  
    // Mock API response
    submitAPI.mockResolvedValueOnce(true);
  
    const submitButton = screen.getByRole('button', { name: /book table/i });
  
    // Adding a listener to confirm the submission handler is triggered
    fireEvent.click(submitButton);
  
    // Assertions
    await screen.findByText(/booking confirmed/i); // Ensure navigation or success text appears
    expect(submitAPI).toHaveBeenCalledTimes(1);
    expect(submitAPI).toHaveBeenCalledWith({
      seats: 2,
      date: '2023-12-31',
      time: '18:00',
      occasion: 'Birthday',
      specialRequests: '',
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      contactNumber: '1234567890',
    });
  });
});

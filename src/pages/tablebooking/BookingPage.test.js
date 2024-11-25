import { initializeTimes, updateTimes } from './BookingPage';
import { fetchAPI } from './api';

jest.mock('./api', () => ({
  ...jest.requireActual('./api'),
  fetchAPI: jest.fn(),
}));

describe('BookingPage', () => {
  test('initializeTimes returns the correct initial times', async () => {
    const expectedTimes = ['12:00', '13:00', '14:00', '18:00', '19:00', '20:00', '21:00'];
    fetchAPI.mockResolvedValue(expectedTimes);

    const times = await initializeTimes();
    expect(times).toEqual(expectedTimes);
  });

  test('updateTimes returns the updated state with new times', () => {
    const currentState = ['12:00', '13:00', '14:00'];
    const newTimes = ['15:00', '16:00'];
    const action = { type: 'UPDATE_TIMES', payload: newTimes };
    expect(updateTimes(currentState, action)).toEqual(newTimes);
  });
});
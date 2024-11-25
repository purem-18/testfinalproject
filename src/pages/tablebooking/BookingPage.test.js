import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Main, { initializeTimes, updateTimes } from './BookingPage';

describe('BookingPage', () => {
  test('initializeTimes returns the correct initial times', () => {
    const expectedTimes = ['12:00', '13:00', '14:00', '18:00', '19:00', '20:00', '21:00'];
    expect(initializeTimes()).toEqual(expectedTimes);
  });

  test('updateTimes returns the same state', () => {
    const currentState = ['12:00', '13:00', '14:00'];
    const action = { type: 'UPDATE_TIMES', payload: '2023-06-01' };
    expect(updateTimes(currentState, action)).toEqual(currentState);
  });
});
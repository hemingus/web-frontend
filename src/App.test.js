import { render, screen } from '@testing-library/react';
import App from './App';

function sum(a, b) {
  return a + b;
}

test('adds 1+2 = 3', () => {
  expect(sum(1,2)).toBe(3);
});

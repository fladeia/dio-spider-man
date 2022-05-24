import React from 'react';
import { render, screen } from '@testing-library/react';
import { Card } from './index';

test('renders card with two images and a text wrapped in ancor', () => {
  render(<Card />);

  // const imgEl = screen.getByRole('img')
  // const img1El = screen.getByRole('img');
  // const text1 = screen.getByText(/Tobey/)

  // const imgBg2El = screen.getByRole('img')
  // const img2El = screen.getByRole('img');
  // const text2 = screen.getByText(/Tom/)

  // const imgBg3El = screen.getByRole('img');
  // const img3El = screen.getByRole('img');
  // const text3 = screen.getByText(/Andrew/)

  // expect(imgEl).toBeInTheDocument();
  // expect(img1El).toBeInTheDocument();
  // expect(text1).toBeInTheDocument();

  // expect(imgBg2El).toBeInTheDocument();
  // expect(img2El).toBeInTheDocument();
  // expect(text2).toBeInTheDocument();

  // expect(imgBg3El).toBeInTheDocument();
  // expect(img3El).toBeInTheDocument();
  // expect(text3).toBeInTheDocument();
});

export { }

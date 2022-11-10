import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Header from '..';

afterEach(cleanup);

describe("Header component", () => {
  // baseline test
  it('renders', () => {
    render(<Header />);
  });
  // snapshot Test
  it('matches snapshot DOM node structure', () => {
    const { asFragment } = render(<Header />);
    expect(asFragment()).toMatchSnapshot();
  });
});

describe('links are visible', () => {
    it('inserts text into the links', () => {
        const { getByTestId } = render(<Header />);
        // eslint-disable-next-line testing-library/prefer-screen-queries
        expect(getByTestId('link')).toHaveTextContent('Naferi');
        // eslint-disable-next-line testing-library/prefer-screen-queries
        expect(getByTestId('about')).toHaveTextContent('About');
    });
  })
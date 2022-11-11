// __tests__/Nav.test.js with hard coded categories
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Header from '..';

afterEach(cleanup);

describe('Header component', () => {
  it('renders', () => {
    render(<Header />);
  });

  it('matches snapshot', () => {
    const { asFragment } = render(<Header />);

    expect(asFragment()).toMatchSnapshot();
  });
})

describe('links are visible', () => {
  it('inserts text into the links', () => {
    const { getByTestId } = render(<Header />);

    // eslint-disable-next-line testing-library/prefer-screen-queries
    expect(getByTestId('link')).toHaveTextContent('Naferi');
    // eslint-disable-next-line testing-library/prefer-screen-queries
    expect(getByTestId('about')).toHaveTextContent('About');
  });

})
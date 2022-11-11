// __tests__/Gallery.test.js
import React from 'react'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Projects from '..'
const back = { name: "Deepen", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie" };

afterEach(cleanup)

describe('Portfolio component', () => {

  it('renders', () => {
    render(<Projects currentCategory={back} />);
  });

  it('matches snapshot', () => {
    const { asFragment } = render(<Projects currentCategory={back} />)
    expect(asFragment()).toMatchSnapshot()
  })
});

it('renders', () => {
  const { getByTestId } = render(<Projects currentCategory={back} />)
  // eslint-disable-next-line testing-library/prefer-screen-queries
  expect(getByTestId('h1tag')).toHaveTextContent('Deepen')
})
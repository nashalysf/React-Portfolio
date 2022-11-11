// __tests__/PhotoList.test.js
import React from 'react'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Projects from '../'

afterEach(cleanup)

describe('Projects is rendering', () => {
  it('renders', () => {
    render(<Projects />);
  });

  // eslint-disable-next-line jest/no-identical-title
  it('renders', () => {
    const { asFragment } = render(<Projects />)
    expect(asFragment()).toMatchSnapshot()
  });
});

/**
 * @jest-environment jsdom
 */
import React from 'react';
import {fireEvent, screen, render} from '@testing-library/react';
import Button from './button.jsx';

describe(`Button`, () => {
  it(`Should call a calback when call an event click`, () => {
    const clickHandler = jest.fn();
    render(<Button onClick={clickHandler}>Click</Button>);
    fireEvent.click(screen.getByText(`Click`));
    expect(clickHandler).toHaveBeenCalledTimes(1);
  });
});

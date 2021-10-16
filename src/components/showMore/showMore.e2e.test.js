/**
 * @jest-environment jsdom
 */
import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react';
import ShowMore from './showMore.jsx';

describe(`ShowMore`, () => {
  it(`Should called an onClick callback`, () => {
    const clickHandler = jest.fn();
    render(<ShowMore onClick={clickHandler}/>);
    const button = screen.getByRole(`button`);
    fireEvent.click(button);
    expect(clickHandler).toHaveBeenCalledTimes(1);
  });
});

/**
 * @jest-environment jsdom
 */
import React from 'react';
import {render} from '@testing-library/react';
import Tabs from './Tabs.jsx';
import {Tabs} from '../../constants/consts.ts';

describe(`Tabs`, () => {
  it(`Should render correctly Tabs`, () => {
    const tabDetails = () => <div></div>;
    const {asFragment} = render(<Tabs tabNavs={Object.values(Tabs)}
      onChangeActiveTab={jest.fn()}
      tabDetails={tabDetails()}
    />);
    expect(asFragment()).toMatchSnapshot();
  });
});


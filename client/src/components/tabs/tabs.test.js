/**
 * @jest-environment jsdom
 */
import React from 'react';
import {render} from '@testing-library/react';
import Tabs from './tabs.jsx';
import {tabs} from '../../constants/consts.js';

describe(`Tabs`, () => {
  it(`Should render correctly tabs`, () => {
    const tabDetails = () => <div></div>;
    const {asFragment} = render(<Tabs tabNavs={Object.values(tabs)}
      onChangeActiveTab={jest.fn()}
      tabDetails={tabDetails()}
    />);
    expect(asFragment()).toMatchSnapshot();
  });
});


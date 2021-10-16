import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Tabs from './tabs.jsx';
import {tabs} from '../../constants/consts.js';


Enzyme.configure({adapter: new Adapter()});

describe(`Tabs`, () => {
  it(`Should call click on a link of tab`, () => {
    const mockComponent = () => <div></div>;
    const onChangeActiveTab = jest.fn();
    const tabNavs = Object.values(tabs);
    const wrapper = shallow(
        <Tabs tabNavs={tabNavs}
          tabDetails={mockComponent()}
          onChangeActiveTab={onChangeActiveTab}
        />
    );
    const tabsLinks = wrapper.find(`.movie-nav__link`);
    tabsLinks.forEach((link) => link.simulate(`click`, {
      preventDefault: () => {},
      onChangeActiveTab
    }));

    expect(onChangeActiveTab.mock.calls.length).toBe(tabsLinks.length);
  });
});

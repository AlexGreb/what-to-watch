import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Tabs from './Tabs.jsx';
import {Tabs} from '../../constants/consts.ts';


Enzyme.configure({adapter: new Adapter()});

describe(`Tabs`, () => {
  it(`Should call click on a link of tab`, () => {
    const mockComponent = () => <div></div>;
    const onChangeActiveTab = jest.fn();
    const tabNavs = Object.values(Tabs);
    const wrapper = shallow(
        <Tabs tabNavs={tabNavs}
          tabDetails={mockComponent()}
          onChangeActiveTab={onChangeActiveTab}
        />
    );
    const TabsLinks = wrapper.find(`.movie-nav__link`);
    TabsLinks.forEach((link) => link.simulate(`click`, {
      preventDefault: () => {},
      onChangeActiveTab
    }));

    expect(onChangeActiveTab.mock.calls.length).toBe(TabsLinks.length);
  });
});

/**
 * @jest-environment jsdom
 */

import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import withActiveTab from './withActiveTab.tsx';
import {Tabs} from '../../constants/consts.ts';
import {act} from 'react-dom/test-utils';


Enzyme.configure({adapter: new Adapter()});

describe(`WithActiveTab HOC`, () => {
  it(`Should change active tab`, () => {

    const EmptyComponent = () => null;
    const WithActiveTab = withActiveTab((props) => <EmptyComponent {...props} />);
    let wrapper = mount(<WithActiveTab activeTab={Tabs.OVERVIEW}/>);

    expect(wrapper.find(EmptyComponent).props().activeTab).toBe(Tabs.OVERVIEW);
    act(() => wrapper.find(EmptyComponent).props().onChangeActiveTab(Tabs.DETAILS));
    wrapper = wrapper.update();
    expect(wrapper.find(EmptyComponent).props().activeTab).toBe(Tabs.DETAILS);
  });

});

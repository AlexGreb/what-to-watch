/**
 * @jest-environment jsdom
 */

import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import withActiveCard from './withActiveCard.js';
import {act} from 'react-dom/test-utils';

Enzyme.configure({adapter: new Adapter()});

describe(`WithActiveCard HOC`, () => {
  it(`Should call mouseleave and mouseover callbacks`, () => {

    const EmptyComponent = () => null;
    const WithActiveCard = withActiveCard((props) => <EmptyComponent {...props} />);
    let wrapper = mount(<WithActiveCard/>);

    expect(wrapper.find(EmptyComponent).props().isPlaying).toBe(false);
    act(() => wrapper.find(EmptyComponent).props().onMouseEnter());
    wrapper = wrapper.update();
    expect(wrapper.find(EmptyComponent).props().isPlaying).toBe(true);
  });

});


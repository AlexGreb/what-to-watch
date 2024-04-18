import React from 'react';
import renderer from 'react-test-renderer';
import withActiveTab from './withActiveTab.tsx';
import {Tabs} from '../../constants/consts.ts';

describe(`WithActiveTab hoc`, () => {
  const mockComponent = () => <div></div>;
  it(`Should render correctly WithActiveTab HOC`, ()=> {
    const tabDetails = () => <div></div>;
    const wrappedComponent = withActiveTab(mockComponent);
    const tree = renderer.create(<wrappedComponent tabNavs={Object.values(Tabs)}
      onChangeActiveTab={jest.fn()}
      tabDetails={tabDetails}
    />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

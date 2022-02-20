import React, {useState, ComponentType} from 'react';
import {useEffect} from 'react';
import {useLocation, useSearchParams} from 'react-router-dom';
import {Tabs} from '../../constants/consts'

type HOCProps = {
  onChangeActiveTab: (tab: Tabs) => void;
};

const withActiveTab = <T extends {activeTab: string}>(Component: ComponentType<T>): ComponentType<Omit<T, keyof HOCProps>> => {

  type ComponentProps = Omit<T, keyof HOCProps>;

  return function WrappedComponent(props:ComponentProps):JSX.Element {
    const {pathname} = useLocation();
    const [params, setSearchParams] = useSearchParams();
    const activeTabName = params.get(`tab`) || props.activeTab;
    const [activeTab, setActiveTab] = useState(activeTabName);
    const changeTabHandler = (tab: Tabs):void => {
      setActiveTab(tab);
      setSearchParams({tab});
    };

    useEffect(() => {
      setActiveTab(activeTabName);
    }, [pathname]);

    return (
      <Component {...props as T}
        activeTab={activeTab}
        onChangeActiveTab={changeTabHandler}/>
    );
  };
};

export default withActiveTab;

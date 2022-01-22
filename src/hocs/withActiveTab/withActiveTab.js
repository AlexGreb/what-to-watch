import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {useEffect} from 'react';
import {useLocation, useSearchParams} from 'react-router-dom';

const withActiveTab = (Component) => {

  return function WrappedComponent(props) {
    const {pathname} = useLocation();
    const [params, setSearchParams] = useSearchParams();
    const activeTabName = params.get(`tab`) || props.activeTab;
    const [activeTab, setActiveTab] = useState(activeTabName);
    const changeTabHandler = (tab) => {
      setActiveTab(tab);
      setSearchParams({tab});
    };

    useEffect(() => {
      setActiveTab(activeTabName);
    }, [pathname]);

    WrappedComponent.propTypes = {
      activeTab: PropTypes.string
    };
    return (
      <Component {...props}
        activeTab={activeTab}
        onChangeActiveTab={changeTabHandler}/>
    );
  };
};

export default withActiveTab;

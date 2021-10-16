import React, {useState} from 'react';
import PropTypes from 'prop-types';

const withActiveTab = (Component) => {

  return function WrappedComponent(props) {
    const [activeTab, setActiveTab] = useState(props.activeTab);
    const changeTabHandler = (tab) => {
      setActiveTab(tab);
    };

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

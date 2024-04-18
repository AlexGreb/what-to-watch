import React from 'react';
import {useParams} from "react-router-dom";

const withParamsRoute = (Component) => {
  const wrappedComponent = (props) => {
    const params = useParams();
    return (
      <Component {...props} {...params}/>
    );
  };
  return wrappedComponent;
};

export default withParamsRoute;

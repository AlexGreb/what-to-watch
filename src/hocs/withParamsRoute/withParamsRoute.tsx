import React, {ComponentType} from 'react';
import {useParams, Params} from 'react-router-dom';

const withParamsRoute = <T,>(Component: ComponentType<T>): ComponentType<Omit<T, keyof Params>> => {
  type ComponentProps = Omit<T, keyof Params>;

  const wrappedComponent = (props: ComponentProps): JSX.Element => {
    const params = useParams();
    return (
      <Component {...props as T} {...params as Params}/>
    );
  };
  return wrappedComponent;
};

export default withParamsRoute;

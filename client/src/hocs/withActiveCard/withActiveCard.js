import React, {useState} from 'react';

const withActiveCard = (Component) => {
  return function WrappedComponent(props) {
    const [isPlaying, setPlayItem] = useState(false);
    const mouseenterHandler = () => {
      setPlayItem(true);
    };
    const mouseleaveHandler = () => {
      setPlayItem(false);
    };
    return (
      <Component
        {...props}
        onMouseEnter={mouseenterHandler}
        onMouseLeave={mouseleaveHandler}
        isPlaying={isPlaying}
      />
    );
  };
};

export default withActiveCard;

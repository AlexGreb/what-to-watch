import React, {useState, ComponentType} from 'react';

type HOCProps = {
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  isPlaying: boolean;
}

const withActiveCard = <T,>(Component: ComponentType<T>): ComponentType<Omit<T, keyof HOCProps>> => {
  type ComponentProps = Omit<T, keyof HOCProps>;

  return function WrappedComponent(props: ComponentProps): JSX.Element {
    const [isPlaying, setPlayItem] = useState(false);
    const mouseenterHandler = () => {
      setPlayItem(true);
    };
    const mouseleaveHandler = () => {
      setPlayItem(false);
    };
    return (
      <Component
        {...props as T}
        onMouseEnter={mouseenterHandler}
        onMouseLeave={mouseleaveHandler}
        isPlaying={isPlaying}
      />
    );
  };
};

export default withActiveCard;

import React from 'react';
import {ButtonTypes} from '../../constants/consts';

type ButtonProps = {
  children: React.ReactNode,
  onClick: () => void,
  className: string,
  type?: ButtonTypes
}

const Button = ({children, onClick, className, type = ButtonTypes.BUTTON}: ButtonProps): JSX.Element => {
  const CSSClasses = [`btn`];
  CSSClasses.push(className);

  return (
    <button
      type={ButtonTypes[type]}
      className={CSSClasses.join(` `)}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;

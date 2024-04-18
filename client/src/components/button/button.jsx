import React from 'react';
import {buttonTypes} from '../../constants/consts.js';
import PropTypes from 'prop-types';

const Button = ({children, onClick, className, type = buttonTypes.BUTTON}) => {
  const CSSClasses = [`btn`];
  CSSClasses.push(className);

  return (
    <button
      type={buttonTypes[type]}
      className={CSSClasses.join(` `)}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.any,
  onClick: PropTypes.func,
  className: PropTypes.string,
  type: PropTypes.string
};

export default Button;

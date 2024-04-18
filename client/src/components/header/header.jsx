import React from 'react';
import {useSelector} from 'react-redux';
import {namespaces} from '../../store/namespaces';
import {authorizationStatus} from '../../constants/consts.js';
import {Link} from 'react-router-dom';
import {dataUrl} from '../../constants/consts.js';

const Header = ({title, addClass}) => {
  const authorizationStatusString = useSelector((state) => state[namespaces.USER].authStatus);
  const isAuthBlock = () => {
    if (authorizationStatusString === authorizationStatus.AUTH) {
      return (
        <Link to={dataUrl.FAVORITE} className="user-block__avatar">
          <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
        </Link>
      );
    }
    return null;
  };
  return (
    <header className={`page-header${addClass != null ? ` ${addClass}` : ``}`}>
      <div className="logo">
        <Link to={dataUrl.HOME} className="logo__link">
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </Link>
      </div>
      {title}
      <div className="user-block">
        {isAuthBlock()}
      </div>
    </header>
  );
};

export default Header;

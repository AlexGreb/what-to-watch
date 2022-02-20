import React from 'react';
import {useSelector} from 'react-redux';
import {Namespaces} from '../../store/storeNamespaces';
import {AuthorizationStatus, AppRoute} from '../../constants/consts';
import {Link, RouteProps} from 'react-router-dom';

type HeaderProps = {
  title: JSX.Element | string;
  addClass: string
}

const Header = ({title, addClass}: HeaderProps): JSX.Element => {
  const AuthorizationStatusString:AuthorizationStatus  = useSelector((state) => state[Namespaces.USER].authStatus);
  const isAuthBlock = ():JSX.Element | null  => {
    if (AuthorizationStatusString === AuthorizationStatus.AUTH) {
      return (
        <Link to={AppRoute.FAVORITE} className="user-block__avatar">
          <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
        </Link>
      );
    }
    return null;
  };
  return (
    <header className={`page-header${addClass != null ? ` ${addClass}` : ``}`}>
      <div className="logo">
        <Link to={AppRoute.HOME} className="logo__link">
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

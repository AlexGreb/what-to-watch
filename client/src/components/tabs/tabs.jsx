import React from 'react';
import PropTypes from 'prop-types';

const Tabs = ({tabNavs, tabDetails, activeTab, onChangeActiveTab}) => {

  const changeActiveTabHandler = (e, tab) => {
    e.preventDefault();
    onChangeActiveTab(tab);
  };

  return (
    <>
      <nav className="movie-nav movie-card__nav">
        <ul className="movie-nav__list">
          {
            tabNavs.map((it, index) => {
              return (
                <li className={`movie-nav__item${it === activeTab ? ` movie-nav__item--active` : ``}`}
                  key={`Tabs-${index}`}>
                  <a href="#"
                    onClick={(e) => changeActiveTabHandler(e, it)}
                    className="movie-nav__link">{it}</a>
                </li>
              );
            })
          }
        </ul>
      </nav>
      {tabDetails}
    </>
  );
};

Tabs.propTypes = {
  tabNavs: PropTypes.array,
  tabDetails: PropTypes.object,
  onChangeActiveTab: PropTypes.func,
  activeTab: PropTypes.string
};

export default Tabs;

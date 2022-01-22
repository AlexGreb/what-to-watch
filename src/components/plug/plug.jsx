import React from 'react';
import PropTypes from 'prop-types';
import Footer from '../footer/footer.jsx';

export const Message = {
  LOADING: `Loading...`,
  ERROR: `Some error occured, please try later`
};

const Plug = ({content}) => {

  return (
    <div className="user-page">

      <h1 className="page-title user-page__title">{content}</h1>

      <Footer/>
    </div>
  );
};

Plug.propTypes = {
  content: PropTypes.string.isRequired,
};

export default Plug;

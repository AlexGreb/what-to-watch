import React from 'react';
import Footer from '../footer/footer';

const NotFound = ():JSX.Element => {

  return (
    <>
      <div className="user-page">
        <h1 className="page-title user-page__title">404 <br/>Page not found</h1>
        <Footer/>
      </div>
    </>
  );
};

export default NotFound;

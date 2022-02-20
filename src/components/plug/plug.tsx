import React from 'react';
import Footer from '../footer/footer';

export enum MessageTypes {
  LOADING = `Loading...`,
  ERROR = `Some error occured, please try later`
};

type PlugProps = {
  content: MessageTypes
}

const Plug = ({content}:PlugProps):JSX.Element => {

  return (
    <div className="user-page">

      <h1 className="page-title user-page__title">{content}</h1>

      <Footer/>
    </div>
  );
};

export default Plug;

import React from 'react';
import Header from '../header/header.tsx';
import Footer from '../footer/footer.tsx';
import MovieList from '../movieList/movieList.jsx';
import useMyList from '../../hooks/useMyList.js';
import Plug, {Message} from '../plug/plug.tsx';

const MyList = () => {
  const headerTitle = <h1 className="page-title user-page__title">My list</h1>;
  const {myMoviesList, loading} = useMyList();

  if (loading) {
    return (
      <Plug
        content={Message.LOADING}
      />
    );
  }

  return (
    <div className="user-page">
      <Header title={headerTitle} addClass={`user-page__head`}/>
      <section className="catalog">
        {
          myMoviesList.length > 0 ?
            <MovieList moviesList={myMoviesList}/>
            :
            <h2 className="catalog__empty-text">Your movie list is empty</h2>
        }
      </section>
      <Footer/>
    </div>
  );
};

export default MyList;

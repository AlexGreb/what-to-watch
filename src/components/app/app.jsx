import React from 'react';
import Main from '../main/main.jsx';
import MoviePage from '../moviePage/moviePage.jsx';
import PropTypes from 'prop-types';
import {reviews} from '../../mocks/reviews.js';
import {tabs} from '../../constants/consts.js';
import {createMovie} from '../../adapters/adapters.js';
import withActiveTab from '../../hocs/withActiveTab/withActiveTab.js';
import {useSelector} from 'react-redux';
import {namespaces} from '../../store/namespaces.js';

const WithActiveTabs = withActiveTab(MoviePage);

const App = () => {
  const moviesList = useSelector((store) => store[namespaces.MOVIES].moviesList);
  return (
    <>
      <Main/>
      {/* убрать заглушку */}
      {
        moviesList.length > 0 ?
          <WithActiveTabs movie={createMovie(moviesList[0])}
            movies={moviesList}
            reviews={reviews}
            activeTab={tabs.OVERVIEW}/>
          :
          null
      }
    </>
  );
};

App.propTypes = {
  moviesList: PropTypes.array
};

export default App;

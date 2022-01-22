import React from 'react';
import {
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Main from '../main/main.jsx';
import MoviePage from '../moviePage/moviePage.jsx';
import PropTypes from 'prop-types';
import {reviews} from '../../mocks/reviews.js';
import {tabs} from '../../constants/consts.js';
import withActiveTab from '../../hocs/withActiveTab/withActiveTab.js';
import {useSelector} from 'react-redux';
import {namespaces} from '../../store/namespaces.js';
import SignIn from '../signIn/signIn.jsx';
import {dataUrl} from '../../constants/consts.js';
import FullScreenVideoPlayer from '../fullScreenVideoPlayer/fullScreenVideoPlayer.jsx';
import withFullScreenVideo from '../../hocs/withFullScreenVideo/withFullScreenVideo.js';
import withParamsRoute from '../../hocs/withParamsRoute/withParamsRoute.js';
import withCurrentMovie from '../../hocs/withCurrentMovie/withCurrentMovie.js';
import AddReview from '../addReview/addReview.jsx';
import {authorizationStatus} from '../../constants/consts.js';
import MyList from '../myList/myList.jsx';
import Plug, {Message} from '../plug/plug.jsx';

const WrappedMoviePage = withParamsRoute(withCurrentMovie(withActiveTab(MoviePage)));
const WrappedFullScreenVideoPlayer = withParamsRoute(withCurrentMovie(withFullScreenVideo(FullScreenVideoPlayer)));
const WrappedAddReview = withParamsRoute(withCurrentMovie(AddReview));


const App = () => {
  const {moviesList} = useSelector((store) => store[namespaces.MOVIES]);
  const {isLoading, isError} = useSelector((store) => store[namespaces.APP]);
  const {authStatus} = useSelector((state) => state[namespaces.USER]);
  if (isLoading) {
    return <Plug
      content={Message.LOADING}
    />;
  }

  if (isError) {
    return <Plug
      content={Message.ERROR}
    />;
  }

  return (
    <Routes>
      {
        authStatus === authorizationStatus.NO_AUTH ?
          (
            <>
              <Route path={dataUrl.LOGIN} element={<SignIn />}></Route>
              <Route
                path="*"
                element={<Navigate to={dataUrl.LOGIN} />} />
            </>
          )
          :
          (
            <>
              <Route path="/" element={<Main/>}></Route>
              <Route path={`${dataUrl.FILMS}:id`} element={<WrappedMoviePage movies={moviesList} activeTab={tabs.OVERVIEW} reviews={reviews}/>}></Route>
              <Route path={`${dataUrl.FILMS}:id${dataUrl.PLAYER}`} element={<WrappedFullScreenVideoPlayer movies={moviesList}/>} />
              <Route path={`${dataUrl.REVIEWS}:id`} element={<WrappedAddReview movies={moviesList}/>} />
              <Route path={dataUrl.FAVORITE} element={<MyList/>} />
              <Route
                path={dataUrl.LOGIN}
                element={<Navigate to="/" />} />
            </>
          )
      }


    </Routes>

  );
};

App.propTypes = {
  moviesList: PropTypes.array
};

export default App;

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
import {Tabs} from '../../constants/consts.ts';
import withActiveTab from '../../hocs/withActiveTab/withActiveTab.tsx';
import {useSelector} from 'react-redux';
import {Namespaces} from '../../store/storeNamespaces.ts';
import SignIn from '../signIn/signIn.jsx';
import {AppRoute} from '../../constants/consts.ts';
import FullScreenVideoPlayer from '../fullScreenVideoPlayer/fullScreenVideoPlayer.jsx';
import withFullScreenVideo from '../../hocs/withFullScreenVideo/withFullScreenVideo.js';
import withParamsRoute from '../../hocs/withParamsRoute/withParamsRoute.js';
import withCurrentMovie from '../../hocs/withCurrentMovie/withCurrentMovie.tsx';
import AddReview from '../addReview/addReview.jsx';
import {AuthorizationStatus} from '../../constants/consts.ts';
import MyList from '../myList/myList.jsx';
import Plug, {MessageTypes} from '../plug/plug.tsx';
import NotFound from '../notFound/notFound.tsx';

const WrappedMoviePage = withParamsRoute(withCurrentMovie(withActiveTab(MoviePage)));
const WrappedFullScreenVideoPlayer = withParamsRoute(withCurrentMovie(withFullScreenVideo(FullScreenVideoPlayer)));
const WrappedAddReview = withParamsRoute(withCurrentMovie(AddReview));


const App = () => {
  const {moviesList} = useSelector((store) => store[Namespaces.MOVIES]);
  const {isLoading, isError} = useSelector((store) => store[Namespaces.APP]);
  const {authStatus} = useSelector((state) => state[Namespaces.USER]);
  if (isLoading) {
    return <Plug
      content={MessageTypes.LOADING}
    />;
  }

  if (isError) {
    return <Plug
      content={MessageTypes.ERROR}
    />;
  }

  return (
    <Routes>
      {
        authStatus === AuthorizationStatus.NO_AUTH ?
          (
            <>
              <Route path={AppRoute.LOGIN} element={<SignIn />}></Route>
              <Route
                path="*"
                element={<Navigate to={AppRoute.LOGIN} />} />
            </>
          )
          :
          (
            <>
              <Route path="/" element={<Main/>}></Route>
              <Route path={`${AppRoute.FILMS}:id`} element={<WrappedMoviePage movies={moviesList} activeTab={Tabs.OVERVIEW} reviews={reviews}/>}></Route>
              <Route path={`${AppRoute.FILMS}:id${AppRoute.PLAYER}`} element={<WrappedFullScreenVideoPlayer movies={moviesList}/>} />
              <Route path={`${AppRoute.REVIEWS}:id`} element={<WrappedAddReview movies={moviesList}/>} />
              <Route path={AppRoute.FAVORITE} element={<MyList/>} />
              <Route path="*" element={<NotFound />} />
              <Route
                path={AppRoute.LOGIN}
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

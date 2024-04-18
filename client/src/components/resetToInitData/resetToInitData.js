import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {useLocation} from 'react-router-dom';
import {resetShownMoviesNumber} from '../../store/app/appReducer.js';

const ResetToInitData = () => {
  const dispatch = useDispatch();
  const {pathname} = useLocation();

  useEffect(() => {
    dispatch(resetShownMoviesNumber());
  }, [pathname]);

  return null;
};

export default ResetToInitData;


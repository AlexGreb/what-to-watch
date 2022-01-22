import React from 'react';
import PropTypes from 'prop-types';
import Button from '../button/button.jsx';
import {VIDEO_PROGRESS} from '../../constants/consts.js';
import history from '../../history.js';

const FullScreenVideoPlayer = ({onPlayButtonClick, onFullScreenButtonClick, onProgressBarClick, children, movie, isPlaying, progress, duration}) => {
  const timeLeft = duration - progress;
  const toggler = progress * VIDEO_PROGRESS / duration;

  const formatRuntime = (time) => {
    const format = (val) => {
      return `${Math.floor(val)}`.slice(-2);
    };
    const hours = time / 3600;
    const minutes = (time % 3600) / 60;
    return [hours, minutes, time % 60].map(format).join(`:`);
  };
  const renderPause = () => (
    <svg viewBox="0 0 14 21" width="14" height="21">
      <use xlinkHref="#pause"></use>
      <span>Pause</span>
    </svg>
  );

  const renderPlay = () => (
    <>
      <svg viewBox="0 0 19 19" width="19" height="19">
        <use xlinkHref="#play-s"></use>
      </svg>
      <span>Play</span>
    </>
  );
  const playingState = isPlaying ? renderPause() : renderPlay();

  return (
    <>
      <div className="visually-hidden">
        <svg>
          <symbol id="add" viewBox="0 0 19 20">
            <title>+</title>
            <desc>Created with Sketch.</desc>
            <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
              <polygon id="+" fill="#EEE5B5" points="10.777832 11.2880859 10.777832 19.5527344 8.41650391 19.5527344 8.41650391 11.2880859 0.627929688 11.2880859 0.627929688 8.92675781 8.41650391 8.92675781 8.41650391 0.662109375 10.777832 0.662109375 10.777832 8.92675781 18.5664062 8.92675781 18.5664062 11.2880859" />
            </g>
          </symbol><symbol id="full-screen" viewBox="0 0 27 27">
            <path fillRule="evenodd" clipRule="evenodd" d="M23.8571 0H16V3.14286H23.8571V11H27V3.14286V0H23.8571Z" fill="#FFF9D9" fillOpacity="0.7" />
            <path fillRule="evenodd" clipRule="evenodd" d="M27 23.8571V16H23.8571V23.8571H16V27H23.8571H27L27 23.8571Z" fill="#FFF9D9" fillOpacity="0.7" />
            <path fillRule="evenodd" clipRule="evenodd" d="M0 3.14286L0 11H3.14286L3.14286 3.14286L11 3.14286V0H3.14286H0L0 3.14286Z" fill="#FFF9D9" fillOpacity="0.7" />
            <path fillRule="evenodd" clipRule="evenodd" d="M3.14286 27H11V23.8571H3.14286L3.14286 16H0L0 23.8571V27H3.14286Z" fill="#FFF9D9" fillOpacity="0.7" />
          </symbol><symbol id="in-list" viewBox="0 0 18 14">
            <path fillRule="evenodd" clipRule="evenodd" d="M2.40513 5.35353L6.1818 8.90902L15.5807 0L18 2.80485L6.18935 14L0 8.17346L2.40513 5.35353Z" fill="#EEE5B5" />
          </symbol>
          <symbol id="pause" viewBox="0 0 14 21">
            <title>Artboard</title>
            <desc>Created with Sketch.</desc>
            <g id="Artboard" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
              <polygon id="Line" fill="#EEE5B5" fillRule="nonzero" points="0 -1.11910481e-13 4 -1.11910481e-13 4 21 0 21" />
              <polygon id="Line" fill="#EEE5B5" fillRule="nonzero" points="10 -1.11910481e-13 14 -1.11910481e-13 14 21 10 21" />
            </g>
          </symbol>
          <symbol id="play-s" viewBox="0 0 58.752 58.752">
            <path d="M52.524,23.925L12.507,0.824c-1.907-1.1-4.376-1.097-6.276,0C4.293,1.94,3.088,4.025,3.088,6.264v46.205
          c0,2.24,1.204,4.325,3.131,5.435c0.953,0.555,2.042,0.848,3.149,0.848c1.104,0,2.192-0.292,3.141-0.843l40.017-23.103
          c1.936-1.119,3.138-3.203,3.138-5.439C55.663,27.134,54.462,25.05,52.524,23.925z M49.524,29.612L9.504,52.716
          c-0.082,0.047-0.18,0.052-0.279-0.005c-0.084-0.049-0.137-0.142-0.137-0.242V6.263c0-0.1,0.052-0.192,0.14-0.243
          c0.042-0.025,0.09-0.038,0.139-0.038c0.051,0,0.099,0.013,0.142,0.038l40.01,23.098c0.089,0.052,0.145,0.147,0.145,0.249
          C49.663,29.47,49.611,29.561,49.524,29.612z" stroke="none" strokeWidth="1" fill="#EEE5B5" fillRule="evenodd"/>
          </symbol>
        </svg>
      </div>
      <div className="player">
        {children}
        <Button className="player__exit"
          onClick={() => history.go(-1)}>
          Exit
        </Button>

        <div className="player__controls">
          <div className="player__controls-row">
            <div className="player__time">
              <progress className="player__progress"
                onClick={onProgressBarClick}
                value={progress}
                max={duration}></progress>
              <div className="player__toggler" style={{left: toggler + `%`}}>Toggler</div>
            </div>
            <div className="player__time-value">{formatRuntime(timeLeft)}</div>
          </div>

          <div className="player__controls-row">
            <button type="button"
              className="player__play"
              onClick={onPlayButtonClick}>
              {playingState}
            </button>
            <div className="player__name">{movie.title}</div>

            <button type="button"
              className="player__full-screen"
              onClick={onFullScreenButtonClick}>
              <svg viewBox="0 0 27 27" width="27" height="27">
                <use xlinkHref="#full-screen"></use>
              </svg>
              <span>Full screen</span>
            </button>
          </div>
        </div>
      </div></>
  );
};

FullScreenVideoPlayer.propTypes = {
  movie: PropTypes.object.isRequired,
  isPlaying: PropTypes.bool.isRequired,
  progress: PropTypes.number.isRequired,
  duration: PropTypes.number.isRequired,
  onPlayButtonClick: PropTypes.func.isRequired,
  onFullScreenButtonClick: PropTypes.func.isRequired,
  onProgressBarClick: PropTypes.func.isRequired,
  children: PropTypes.node
};

export default FullScreenVideoPlayer;

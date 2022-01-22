import React from 'react';
import PropTypes from 'prop-types';

const VideoPlayer = ({poster, src, isMute = true, isPlaying, width, height, delayPlay = 1000, onTimeUpdate = null, onLoadedMetaData = null, preload = `none`}) => {
  let videoRef = React.useRef(null);
  let timeoutPlay = null;

  React.useEffect(()=> {
    const video = videoRef.current;
    if (video) {
      video.src = src;
      video.poster = poster;
      video.muted = isMute;
      video.ontimeupdate = () => {
        if (onTimeUpdate) {
          onTimeUpdate(video);
        }
      };
      video.onloadedmetadata = () => {
        if (onLoadedMetaData) {
          onLoadedMetaData(video);
        }
      };

      if (isPlaying) {
        timeoutPlay = setTimeout(() => {
          video.play();
        }, delayPlay);
      } else {
        if (video.load) {
          video.load();
        }
        clearTimeout(timeoutPlay);
      }
    }
    return () => {
      if (video) {
        video.src = ``;
        video.poster = ``;
        video.muted = null;
        video.ontimeupdate = null;
        video.onloadedmetadata = null;
      }
      clearTimeout(timeoutPlay);
    };
  }, [isPlaying]);


  return (
    <video
      className="player__video"
      width={width}
      height={height}
      ref={videoRef}
      preload={preload}
    >
    </video>
  );
};

VideoPlayer.propTypes = {
  poster: PropTypes.string,
  src: PropTypes.string,
  isMute: PropTypes.bool,
  isPlaying: PropTypes.bool,
  width: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  height: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  isFullScreen: PropTypes.bool,
  delayPlay: PropTypes.number,
  onTimeUpdate: PropTypes.func,
  onLoadedMetaData: PropTypes.func,
  preload: PropTypes.string,
};

export default VideoPlayer;

import React from 'react';
import PropTypes from 'prop-types';

const VideoPlayer = ({poster, src, isMute = true, isPlaying, width, height}) => {
  let videoRef = React.useRef(null);
  let timeoutPlay = null;
  React.useEffect(()=> {
    const video = videoRef.current;
    if (video) {
      video.src = src;
      video.poster = poster;
      video.muted = isMute;
      if (isPlaying) {
        timeoutPlay = setTimeout(() => {
          video.play();
        }, 1000);
      } else {
        if (video.load) {
          video.load();
        }
        clearTimeout(timeoutPlay);
      }
    }
    return () => {
      video.src = ``;
      video.poster = ``;
      video.muted = null;
      clearTimeout(timeoutPlay);
    };
  }, [isPlaying]);


  return (
    <video
      className="player__video"
      width={width}
      height={height}
      ref={videoRef}
    >
    </video>
  );
};

VideoPlayer.propTypes = {
  poster: PropTypes.string,
  src: PropTypes.string,
  isMute: PropTypes.bool,
  isPlaying: PropTypes.bool,
  width: PropTypes.number,
  height: PropTypes.number
};

export default VideoPlayer;

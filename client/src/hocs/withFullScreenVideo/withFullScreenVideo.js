import React, {useState, useRef, useEffect} from 'react';

const withFullScreenVideo = (Component) => {

  return function WrappedComponent(props) {
    const _videoref = useRef(null);
    const {movie} = props;
    const [isPlaying, setPlaying] = useState(true);
    const [duration, setDuration] = useState(0);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
      const video = _videoref.current;
      if (video) {
        video.src = movie.videoLink;
        video.poster = movie.poster;
        // video.play();
        video.ontimeupdate = timeUpdateHandler;
        video.onloadedmetadata = loadedMetaDataHandler;
      }

      return () => {
        if (video) {
          video.src = ``;
          video.poster = ``;
          video.onplay = null;
          video.ontimeupdate = null;
          video.onloadedmetadata = null;
        }
      };
    }, []);

    useEffect(() => {
      const video = _videoref.current;
      // eslint-disable-next-line no-unused-expressions
      isPlaying ? video.play() : video.pause();
    }, [isPlaying]);

    const timeUpdateHandler = () => {
      const video = _videoref.current;
      setProgress(Math.ceil(video.currentTime));
    };

    const loadedMetaDataHandler = () => {
      const video = _videoref.current;
      setDuration(Math.ceil(video.duration));
    };

    const clickPlayButtonHandler = () => {
      setPlaying(!isPlaying);
    };

    const clickFullScreenButtonHandler = () => {
      const video = _videoref.current;
      video.requestFullscreen();
    };

    const clickProgressBarHandler = (e) => {
      const target = e.target;
      const progressBarCoords = target.getBoundingClientRect();
      const max = target.max;
      const offsetWidth = target.offsetWidth;
      const clickedValue = Math.ceil((e.screenX - progressBarCoords.left) * max / offsetWidth);
      const video = _videoref.current;
      video.currentTime = clickedValue;
    };

    return (
      <Component
        {...props}
        movie={movie}
        isPlaying={isPlaying}
        progress={progress}
        duration={duration}
        onPlayButtonClick={clickPlayButtonHandler}
        onFullScreenButtonClick={clickFullScreenButtonHandler}
        onProgressBarClick={clickProgressBarHandler}
      >
        <video onClick={clickPlayButtonHandler}
          ref={_videoref}
          src={movie.videoLink}
          poster={movie.poster}
          width="100%"
          preload="metadata"
        >
        </video>
      </Component>
    );
  };

};

export default withFullScreenVideo;

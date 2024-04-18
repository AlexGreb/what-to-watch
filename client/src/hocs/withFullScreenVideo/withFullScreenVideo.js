import React, {useState, useRef, useEffect, ComponentType} from 'react';
import {Movie} from '../../types/movie';

type HOCProps = {
  isPlaying: boolean;
  progress: number;
  duration: number;
  onPlayButtonClick: () => void;
  onFullScreenButtonClick: () => void;
  onProgressBarClick: (e: React.MouseEvent<HTMLElement>) => void;
}

type ComponentProps = {
  movie: Movie;
}

const withFullScreenVideo = <T extends ComponentProps>(Component: ComponentType<T>): ComponentType<Omit<T, keyof HOCProps>> => {
  type ComponentProps = Omit<T, keyof HOCProps>
  
  return function WrappedComponent(props: ComponentProps): JSX.Element {
    const _videoref = useRef<HTMLVideoElement>(null);
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

    const clickProgressBarHandler = (e: React.MouseEvent<HTMLElement>) => {
      const target = e.target as HTMLProgressElement;
      const progressBarCoords: DOMRect = target.getBoundingClientRect();
      const max: number = target.max;
      const offsetWidth: number = target.offsetWidth;
      const clickedValue = Math.ceil((e.screenX - progressBarCoords.left) * max / offsetWidth);
      const video = _videoref.current;
      video.currentTime = clickedValue;
    };

    return (
      <Component
        {...props as T}
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

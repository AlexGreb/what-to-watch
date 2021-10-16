/**
 * @jest-environment jsdom
 */
import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import VideoPlayer from './videoPlayer.jsx';
import {videoData} from '../../mocks/movies.js';

Enzyme.configure({adapter: new Adapter()});
window.HTMLMediaElement.prototype.load = () => {};
window.HTMLMediaElement.prototype.play = () => {};
window.HTMLMediaElement.prototype.pause = () => {};
window.HTMLMediaElement.prototype.addTextTrack = () => {};
jest.spyOn(window.HTMLMediaElement.prototype, `load`)
  .mockImplementation(() => {
  });
jest.spyOn(window.HTMLMediaElement.prototype, `play`)
  .mockImplementation(() => {});


describe(`Video player`, () => {
  it(`Should the video player has isPlaying state true`, () => {
    const videoPlayer = mount(
        <VideoPlayer
          src={videoData.src}
          poster={videoData.poster}
          muted={true}
          height={175}
          width={280}
          isPlaying={true}
        />
    );
    expect(videoPlayer.props().isPlaying).toBe(true);

    videoPlayer.setProps({isPlaying: false});

    expect(videoPlayer.props().isPlaying).toBe(false);

  });
});


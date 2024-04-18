/**
 * @jest-environment jsdom
 */
import React from 'react';
import {render} from '@testing-library/react';
import VideoPlayer from './videoPlayer.jsx';
import {videoData} from '../../mocks/movies.js';
import enableHooks from 'jest-react-hooks-shallow';

enableHooks(jest);
describe(`Video player`, () => {
  window.HTMLMediaElement.prototype.load = () => {};
  window.HTMLMediaElement.prototype.play = () => {};
  window.HTMLMediaElement.prototype.pause = () => {};
  it(`Should render correctly a video player`, () => {
    const {asFragment} = render(
        <VideoPlayer poster={videoData.poster}
          src={videoData.src}
          isMute={true}
          isPlaying={false}
          height={175}
          width={280}
        />, {
          createNodeMock: () => {
            return {};
          }
        });
    expect(asFragment()).toMatchSnapshot();
  });

});

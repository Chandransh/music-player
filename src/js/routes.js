import React from 'react';
import {Route, IndexRedirect, Redirect} from 'react-router';

import MusicPlayer from './containers/MusicPlayer/MusicPlayer';
import Login from './components/Login/Login';
import Genres from './connect-views/Genres/Genres';
import Player from './connect-views/Player/Player';
import NotFoundView from './static-views/NotFoundView/NotFoundView';

export default (
  <Route path="/" component={MusicPlayer}>
    <IndexRedirect to="music-player"/>
    <Route path="music-player" component={Login}/>
    <Route path="music-player/genres" component={Genres}/>
    <Route path="music-player/:genreName/play" component={Player}/>
    <Route path="music-player/404" component={NotFoundView}/>
    <Redirect from="*" to="music-player/404"/>
  </Route>
);
import React from 'react';
import {Route, IndexRedirect, Redirect} from 'react-router';

import MusicPlayer from './containers/MusicPlayer/MusicPlayer';
import Login from './connect-views/Login/Login';
import NotFoundView from './static-views/NotFoundView/NotFoundView';

export default (
  <Route path="/" component={MusicPlayer}>
    <IndexRedirect to="music-player"/>
    <Route path="music-player" component={Login}/>
    <Route path="music-player/404" component={NotFoundView}/>
    <Redirect from="*" to="music-player/404"/>
  </Route>
);
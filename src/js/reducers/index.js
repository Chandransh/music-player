import {combineReducers} from 'redux';

import getTracksByGenre from './getTracksByGenre';

const rootReducer = combineReducers({
  getTracksByGenre
});

export default rootReducer;
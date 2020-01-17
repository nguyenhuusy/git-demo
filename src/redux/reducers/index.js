import { combineReducers } from 'redux';
import testReducer from './testReducer';
import giphyReducer from './giphyReducer';
import tileReducer from './tileReducer';

export default combineReducers({
  test: testReducer,
  giphy: giphyReducer,
  tile: tileReducer
});
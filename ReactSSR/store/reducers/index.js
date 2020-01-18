import { combineReducers } from 'redux';
import count from './count'
import home from './home'

const reducers = combineReducers({
  count,
  home
});

export default reducers
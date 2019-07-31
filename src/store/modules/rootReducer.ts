import { combineReducers } from 'redux';
import { reducer as toastrReducer } from 'react-redux-toastr';

import auth from './auth';
import tasks from './tasks';
import filter from './filter';

export default combineReducers({
  auth,
  tasks,
  filter,
  toastr: toastrReducer,
});

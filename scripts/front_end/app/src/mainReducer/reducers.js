import { combineReducers } from 'redux';
import getAllDataTaskReducer from '../tasks/reducers/getTasks';
import getDataTaskByIdReducer from '../tasks/reducers/getTasksById';

const reducers = combineReducers({
  getAllDataTaskReducer,
  getDataTaskByIdReducer
})
export default reducers;

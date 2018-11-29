import { combineReducers } from 'redux';
import getAllDataTaskReducer from '../tasks/reducers/getTasks';
import getDataTaskByIdReducer from '../tasks/reducers/getTasksById';
import getAllDataTaskStatusDoneReducer from '../tasks/reducers/getTaskStatusDone';

const reducers = combineReducers({
  getAllDataTaskReducer,
  getDataTaskByIdReducer,
  getAllDataTaskStatusDoneReducer
})
export default reducers;

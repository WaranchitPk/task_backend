import { getTasksStatusIsDone } from '../../mainReducer/types';

const getDataListTaskStatusDone = (state = {}, action) => {
  switch (action.type) {
    case `${getTasksStatusIsDone}_PENDING`:
      return {
        ...state,
        data: null
      };
    case `${getTasksStatusIsDone}_FULFILLED`:
      return {
        ...state,
        data: action.payload
      };
    case `${getTasksStatusIsDone}_REJECTED`:
      return {
        ...state,
        data: 'err'
      };
    default:
      return state;
  }
};
export default getDataListTaskStatusDone

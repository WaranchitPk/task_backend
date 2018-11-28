import { getTasks } from '../../mainReducer/types';

const getAllDataListTask = (state = {}, action) => {
  switch (action.type) {
    case `${getTasks}_PENDING`:
      return {
        ...state,
        data: null
      };
    case `${getTasks}_FULFILLED`:
      return {
        ...state,
        data: action.payload
      };
    case `${getTasks}_REJECTED`:
      return {
        ...state,
        data: 'err'
      };
    default:
      return state;
  }
};
export default getAllDataListTask

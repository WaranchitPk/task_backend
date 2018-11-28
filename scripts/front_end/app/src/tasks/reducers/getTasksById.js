import { getTaskById } from '../../mainReducer/types';

const getDataListTaskById = (state = {}, action) => {
  switch (action.type) {
    case `${getTaskById}_PENDING`:
      return {
        ...state,
        data: null
      };
    case `${getTaskById}_FULFILLED`:
      return {
        ...state,
        data: action.payload
      };
    case `${getTaskById}_REJECTED`:
      return {
        ...state,
        data: 'err'
      };
    default:
      return state;
  }
};
export default getDataListTaskById

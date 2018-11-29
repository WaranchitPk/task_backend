import { getTasks, getTaskById, getTasksStatusIsDone } from '../../mainReducer/types';
import axios from 'axios';
import { path_api } from '../../config';

export const getListTask = () => (
  dispatch => {
    dispatch({
      type: getTasks,
      payload: axios.get(`${path_api}/`)
    })
    dispatch({
      type: getTasksStatusIsDone,
      payload: axios.get(`${path_api}/status_done/`)
    })
  }
)

export const getListTaskStatusDone = () => (
  dispatch => {
    dispatch({
      type: getTasksStatusIsDone,
      payload: axios.get(`${path_api}/status_done/`)
    })
  }
)

export const getListTaskById = (id) => (
  dispatch => {
    dispatch({
      type: getTaskById,
      payload: axios.get(`${path_api}/${id}`)
    })
  }
)

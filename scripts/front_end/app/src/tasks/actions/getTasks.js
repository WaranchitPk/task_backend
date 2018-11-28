import { getTasks, getTaskById } from '../../mainReducer/types';
import axios from 'axios';
import { path_api } from '../../config';

export const getListTask = () => (
  dispatch => {
    dispatch({
      type: getTasks,
      payload: axios.get(`${path_api}/`)
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

import { path_api } from '../../config';
import axios from 'axios';

const deleteTask = (id) => (
  axios.delete(`${path_api}/${id}`)
)
export default deleteTask

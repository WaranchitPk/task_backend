import { path_api } from '../../config';
import axios from 'axios';

export const updateTask = (id, body) => (
  axios.put(`${path_api}/${id}`, {
    subject: body.subject,
    desc: body.desc
  }, {
    headers: {
      'Content-Type': 'application/json'
    }
  })
)

export const updateStatusTask = (id, status) => (
  axios.put(`${path_api}/status/${id}`, {
    status: status
  }, {
    headers: {
      'Content-Type': 'application/json'
    }
  })
)



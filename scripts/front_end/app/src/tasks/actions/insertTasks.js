import { path_api } from '../../config'
import axios from 'axios';

const insertTask = (body) => {
  return axios.post(`${path_api}/`, {
    subject: body.subject,
    desc: body.desc
  }, {
    headers: {
      'Content-Type': 'application/json'
    }
  })
}
export default insertTask

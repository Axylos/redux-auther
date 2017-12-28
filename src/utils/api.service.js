import { getToken } from './token.service';
import axios from 'axios';

export default axios.create({
  baseURL: 'api/',
  headers: {'Authorization': "bearer" + getToken() },
  headers: {'X-Custom-Header': 'foobar'}
});

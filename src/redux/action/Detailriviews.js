import axios from 'axios';

import {APP_URL} from '../../config/config';

const url = APP_URL.concat('riviews/');

export const getRiview = id => {
  return {
    type: 'GET_RIVIEWS_BY_ID',
    payload: axios.get(url.concat(`${id}`)),
  };
};

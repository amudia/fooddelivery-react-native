import axios from 'axios';

import {APP_URL} from '../../config/config';

const url = APP_URL.concat('restaurants');

export const getRestaurant = () => {
  return {
    type: 'GET_RESTAURANT',
    payload: axios.get(url.concat('/')),
  };
};

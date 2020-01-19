import axios from 'axios';

import {APP_URL} from '../../config/config';

const url = APP_URL.concat('restaurants/');

export const getRestaurantid = id => {
  return {
    type: 'GET_RESTAURANT_BY_ID',
    payload: axios.get(url.concat(`${id}`)),
  };
};

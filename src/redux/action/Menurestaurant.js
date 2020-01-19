import axios from 'axios';

import {APP_URL} from '../../config/config';

const url = APP_URL.concat('restaurants/menu/');

export const getMenurestaurant = id => {
  return {
    type: 'GET_MENURESTAURANT',
    payload: axios.get(url.concat(`${id}`)),
  };
};

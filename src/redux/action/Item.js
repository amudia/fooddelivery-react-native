import axios from 'axios';

import {APP_URL} from '../../config/config';

const url = APP_URL.concat('items/');
const url1 = APP_URL.concat('items/category/');

export const getItem = id => {
  return {
    type: 'GET_ITEM_BY_ID',
    payload: axios.get(url.concat(`${id}`)),
  };
};

export const getItemcat = id => {
  return {
    type: 'GET_ITEM_BY_CATEGORY',
    payload: axios.get(url1.concat(`${id}`)),
  };
};

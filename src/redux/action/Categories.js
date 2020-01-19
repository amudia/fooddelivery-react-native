import axios from 'axios';

import {APP_URL} from '../../config/config';

const url = APP_URL.concat('categories');

export const getCategories = () => {
  return {
    type: 'GET_CATEGORIES',
    payload: axios.get(url.concat('/')),
  };
};

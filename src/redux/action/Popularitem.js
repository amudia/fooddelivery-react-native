import axios from 'axios';

import {APP_URL} from '../../config/config';

const url = APP_URL.concat('items');

export const getPopularitem = () => {
  return {
    type: 'GET_POPULAR_ITEM',
    payload: axios.get(url.concat('/showalllimit')),
  };
};

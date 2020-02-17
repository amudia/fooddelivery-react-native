import Axios from 'axios';
import qs from 'qs';
import {APP_URL} from '../../config/config';

// const url = APP_URL.concat('carts/');

// export const getCart = (jwt = null, id) => {
//   return {
//     type: 'GET_CART',
//     payload: Axios.get(APP_URL.concat('carts/' + id), jwt),
//   };
// };

// export const getCartbyid = (jwt = null, id) => {
//   return {
//     type: 'GET_CARTBYID',
//     payload: Axios.get(APP_URL.concat('carts/' + id), jwt),
//   };
// };

export const getCart = (jwt, id) => {
  const url = APP_URL.concat(`carts/${id}`);
  return {
    type: 'GET_CART',
    payload: Axios.get(url, jwt),
  };
};

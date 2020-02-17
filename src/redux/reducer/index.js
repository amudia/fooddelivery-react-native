import {combineReducers} from 'redux';

import itemid from './Item';
import detailriview from './Detailriviews';
import detailrestaurant from './Detailrestaurant';
import menurestaurant from './Menurestaurant';
import restaurant from './Restaurant';
import popularitem from './Pupularitem';
import categories from './Categories';
import login from './Login';
import cart from './Cart';

const appReducer = combineReducers({
  itemid,
  restaurant,
  popularitem,
  categories,
  detailriview,
  detailrestaurant,
  menurestaurant,
  login,
  cart,
});

export default appReducer;

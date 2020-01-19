import {combineReducers} from 'redux';

import itemid from './Item';
import detailriview from './Detailriviews';
import detailrestaurant from './Detailrestaurant';
import menurestaurant from './Menurestaurant';
import restaurant from './Restaurant';
import popularitem from './Pupularitem';
import categories from './Categories';

const appReducer = combineReducers({
  itemid,
  restaurant,
  popularitem,
  categories,
  detailriview,
  detailrestaurant,
  menurestaurant,
});

export default appReducer;

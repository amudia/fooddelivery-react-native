import {combineReducers} from 'redux';

import item from './Item';
import restaurant from './Restaurant';
import popularitem from './Pupularitem';
import categories from './Categories';

const appReducer = combineReducers({
  item,
  restaurant,
  popularitem,
  categories,
});

export default appReducer;

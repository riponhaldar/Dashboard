import { combineReducers } from 'redux';
import modeChangeSlicer from './Slicers/modeChangeSlicer';

const rootReducer = combineReducers({
  darkMode: modeChangeSlicer,
});

export default rootReducer;

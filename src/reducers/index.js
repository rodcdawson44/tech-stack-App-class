import {combineReducers} from 'redux';
import libraryReducer from './libraryReducer';
import selectionReducer from './SelectionReducer';


export default combineReducers({
  libraries: libraryReducer,
  select: selectionReducer
});

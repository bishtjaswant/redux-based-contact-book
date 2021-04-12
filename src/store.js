import { combineReducers, createStore } from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension';
import { contactReducer } from './components/contact/redux/contactReducer';

const store =  createStore( combineReducers({contacts:contactReducer}), composeWithDevTools()  );
export default store;

import { createStore, combineReducers } from 'redux'
import contadorReducer from '../reducer/contadorReducer';

export const store = createStore(
    combineReducers({
        contadorReducer
    })
);
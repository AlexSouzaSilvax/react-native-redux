import { combineReducers } from "redux";
import contadorReducer from './contadorReducer';
import PostFormReducer from './PostFormReducer';

export default combineReducers({
    contadorReducer: contadorReducer,
    postForm: PostFormReducer
})
import { combineReducers } from "redux";
import contadorReducer from './contadorReducer';
import PostFormReducer from './PostFormReducer';
import DataReducer from './DataReducer';

export default combineReducers({
    contadorReducer: contadorReducer,
    postForm: PostFormReducer,
    dataReducer: DataReducer
})
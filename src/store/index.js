import { createStore } from "redux";
import rootReducer from "../reducers/index"
import configureStore from './configureStore';

const store = configureStore();

export default store;

window.store = store;
import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducer/index";
import thunk from 'redux-thunk';

export default function configureStore(initalState) {
  return createStore(rootReducer, initalState, applyMiddleware(thunk))
}
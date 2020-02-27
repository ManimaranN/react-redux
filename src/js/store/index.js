import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers/index";
import { forbiddenWordsMiddleware } from "../middleware/index";
import thunk from "redux-thunk";

import createSagaMiddleware from "redux-saga";
import apiSaga from "../sagas/api-saga";
const initialiseSagaMidlleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  applyMiddleware(forbiddenWordsMiddleware, initialiseSagaMidlleware)
);

initialiseSagaMidlleware.run(apiSaga);

export default store;

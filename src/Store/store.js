import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "../Reducers/reducer.js";
import rootSaga from "../Sagas/userSaga.js";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const mySaga = createSagaMiddleware();
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(mySaga)));
mySaga.run(rootSaga);

export default store;

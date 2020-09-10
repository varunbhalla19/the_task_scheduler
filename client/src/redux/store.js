import { createStore, applyMiddleware } from "redux";

import thunk from "redux-thunk";

import { logger } from "redux-logger";

import rootReducer from "./reducers/root-reducer";

// const rootReducer = combineReducers({});

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;

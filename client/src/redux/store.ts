import thunk from 'redux-thunk';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import api from "../api";
import rootReducer from "./reducers";

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument({ api }))
  ),
);

export type State = ReturnType<typeof rootReducer>;

export default store;
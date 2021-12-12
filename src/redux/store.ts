import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import combinedReducers from "./reducers/index";
import { persistStore } from "redux-persist";

export const store = createStore(
    combinedReducers,
    {},
    composeWithDevTools(applyMiddleware(thunk))
);

export const persistor = persistStore(store as any);

const base = { store, persistStore };

export default base;
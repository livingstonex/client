import { combineReducers } from "redux";
import { authReducer } from "./auth-reducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persisConfig = {
    key: 'eventingsapp',
    storage,
    whitelist: ['auth']
}

const reducers = combineReducers({
    auth: authReducer,
});

export default persistReducer(persisConfig, reducers);

export type State = ReturnType<typeof reducers>
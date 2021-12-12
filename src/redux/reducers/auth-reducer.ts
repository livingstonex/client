import { AuthActionTypes } from "../action-types/index";
import { Action } from "../actions/index";

  interface initialStateI {
    authenticated: boolean;
    user: string;
    token: string;
  }

  const initialState = {
    authenticated: false,
    user: "",
    token: "",
  };

  export const authReducer = (state: initialStateI = initialState, action: Action) => {
      switch (action.type) {
          case AuthActionTypes.LOGIN:
            return Object.assign({}, state, { authenticated: action.payload });
        
          case AuthActionTypes.LOGOUT:
            return Object.assign({}, state, { authenticated: action.payload });

          case AuthActionTypes.STORE_TOKEN:
              return Object.assign({}, state, { token: action.payload });

          case AuthActionTypes.STORE_USER:
              return Object.assign({}, state, { user: action.payload });

          default:
              return state;
      }
  };
import { AuthActionTypes } from "../action-types/index";
import { Action } from "../actions/index";

  interface initialStateI {
    authenticated: boolean;
    user: string;
    // error: string;
  }

  const initialState = {
    authenticated: false,
    user: "",
    // error: "",
  };

  export const authReducer = (state: initialStateI = initialState, action: Action) => {
      switch (action.type) {
          case AuthActionTypes.LOGIN:
            return Object.assign({}, state, { authenticated: action.payload });
        
          case AuthActionTypes.LOGOUT:
            return Object.assign({}, state, { authenticated: action.payload });

          default:
              return state;
      }
  };
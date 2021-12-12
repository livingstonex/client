import { AuthActionTypes } from "../action-types/index";

  interface loginAction {
    type: AuthActionTypes.LOGIN;
    payload: boolean;
  }

  interface logoutAction {
    type: AuthActionTypes.LOGOUT;
    payload: boolean;
  }

  export type Action = loginAction | logoutAction;
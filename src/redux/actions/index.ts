import { AuthActionTypes } from "../action-types/index";

  interface loginAction {
    type: AuthActionTypes.LOGIN;
    payload: boolean;
  }

  interface logoutAction {
    type: AuthActionTypes.LOGOUT;
    payload: boolean;
  }

  interface storeTokenAction {
    type: AuthActionTypes.STORE_TOKEN;
    payload: string;
  }

  interface storeUserAction {
    type: AuthActionTypes.STORE_USER;
    payload: string;
  }

  export type Action = loginAction | logoutAction | storeTokenAction | storeUserAction;
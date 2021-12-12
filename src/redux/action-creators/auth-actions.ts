import { Dispatch } from "redux";
import { AuthActionTypes } from "../action-types/index";

export const login = () => async (dispatch: Dispatch) => {
    dispatch({
      type: AuthActionTypes.LOGIN,
      payload: true,
    });
  };

export const logout = () => async (dispatch: Dispatch) => {
    dispatch({
      type: AuthActionTypes.LOGOUT,
      payload: false,
    });
  };

export const storeToken = (token: string) => async (dispatch: Dispatch) => {
    dispatch({
      type: AuthActionTypes.STORE_TOKEN,
      payload: token,
    });
  };

export const storeUser = (email: string) => async (dispatch: Dispatch) => {
    dispatch({
      type: AuthActionTypes.STORE_USER,
      payload: email,
    });
  };
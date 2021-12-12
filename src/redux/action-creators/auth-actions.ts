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
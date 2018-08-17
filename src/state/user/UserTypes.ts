import { IUserState } from '../../interfaces/IUserState';

import { Action } from 'redux';
// import { IAuthResponse } from '../../interfaces/responses/IAuthResponse';
import { AjaxResponse } from '../../../node_modules/rxjs/ajax';

export enum UserActionType {
  LOGIN = 'login',
  LOGIN_FAILED = 'login_failed',
  LOGIN_SUCCESS = 'login_success',
  SIGNUP = 'signup',
  SIGNUP_FAILED = 'signup_failed',
  SIGNUP_SUCCESS = 'signup_success'
};

export enum UserLoginError {
  EMAIL_MISSING,
  INVALID_EMAIL,
  PASSWORD_MISSING,
  PASSWORD_TOO_SHORT,
  INVALID_USERNAME_OR_PASSWORD,
  SERVER_ERROR
};

export interface ILoginAction extends Action {
  type: UserActionType.LOGIN,
  payload: {
    username: string;
    password: string;
    rememberMe?: boolean;
  }
}

export interface ILoginSuccessAction extends Action {
  type: UserActionType.LOGIN_SUCCESS,
  payload: AjaxResponse
}

export interface ILoginFailedAction extends Action {
  type: UserActionType.LOGIN_FAILED,
  payload: {
    error: UserLoginError[]
  }
}

export enum UserSignUpError {
  EMAIL_MISSING,
  INVALID_EMAIL,
  PASSWORD_MISSING,
  PASSWORD_TOO_SHORT,
  USERNAME_MISSING,
  USERNAME_TOO_SHORT,
  USER_EXISTS,
  SERVER_ERROR
}

export interface ISignUpAction extends Action {
  type: UserActionType.SIGNUP,
  payload: {
    username: string;
    email: string;
    password: string;
  }
}

export interface ISignUpSuccessAction extends Action {
  type: UserActionType.SIGNUP_SUCCESS,
  payload: AjaxResponse
}

export interface ISignUpFailedAction extends Action {
  type: UserActionType.SIGNUP_FAILED,
  payload: {
    error: UserSignUpError[];
  }
}

export const DEFAULT_USER_STATE: IUserState = {
  isLoggedIn: false,
  isLoginInProgress: false,
  isSignUpInProgress: false
};

export type IUserActions = ILoginAction | ILoginSuccessAction | ILoginFailedAction
  | ISignUpAction | ISignUpSuccessAction | ISignUpFailedAction;

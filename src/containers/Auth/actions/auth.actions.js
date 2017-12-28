import { AUTH_FAIL, AUTH_SUCCESS, AUTH_VALIDATE } from './auth.types';

export function rejectAuth() {
  return {
    type: AUTH_FAIL
  }
}

export const confirmAuth = (users) => {
  return {
    type: AUTH_SUCCESS,
    payload: users
  }
}

export const validateAuth = (creds) => {
  return { type: AUTH_VALIDATE, payload: creds };
}

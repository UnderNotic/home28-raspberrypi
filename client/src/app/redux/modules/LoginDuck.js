// Actions
const LOGIN = "LOGIN";
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOGIN_FAIL = 'LOGIN_FAIL';

const LOGOUT = 'LOGOUT';
const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
const LOGOUT_FAIL = 'LOGOUT_FAIL';


// Reducer

// Action Creators
export function login(login, pass) {
    return { type: LOGIN, payload: { login, pass } };
}
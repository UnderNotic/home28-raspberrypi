import { loginUrl } from '../../utils/url';
import { fetchPost } from '../../containers/services/fetchService';

// Actions
const LOGIN_REQUEST = "containers/login/LOGIN_REQUEST";
const LOGIN_REQUEST_SUCCESS = 'containers/login/LOGIN_REQUEST_SUCCESS';
const LOGIN_REQUEST_FAIL = 'containers/login/LOGIN_REQUEST_FAIL';

// Reducer
export default function reducer(state = {
    isFetching: false,
    isFailing: false,
    isLoginSuccessful: false,
    jwtToken: ""
}, action = {}) {
    switch (action.type) {
        case LOGIN_REQUEST:
            return { ...state, isFetching: true };
        case LOGIN_REQUEST_SUCCESS:
            return { ...state, isFetching: false, isFailing: false, isLoginSuccessful: true, jwtToken: action.token.token };
        case LOGIN_REQUEST_FAIL:
            return { ...state, isFailing: true };
        default:
            return state;
    }
}

// Action Creators
function loginRequest() {
    return { type: LOGIN_REQUEST };
}

function loginRequestSuccess(token, expiryDate) {
    return { type: LOGIN_REQUEST_SUCCESS, token, expiryDate };
}

function loginRequestFail(error) {
    return { type: LOGIN_REQUEST_FAIL, error };
}

export const fetchLogin = (login, pass) => async dispatch => {
    try {
        dispatch(loginRequest());
        let response = await fetchPost(loginUrl, { login, password: pass });

        if (!response.ok) {
            dispatch(loginRequestFail(response.statusText));
            return;
        }
        let json = await response.json();
        dispatch(loginRequestSuccess(json, null));
    } catch (ex) {
        dispatch(loginRequestFail(ex.toString()));
    }
};

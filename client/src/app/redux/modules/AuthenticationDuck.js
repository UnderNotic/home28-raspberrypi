import { isAuthenticatedUrl } from '../../utils/url';

// Actions
const AUTHENTICATION_REQUEST = "containers/login/AUTHENTICATION_REQUEST";
const AUTHENTICATION_REQUEST_SUCCESS = 'containers/login/AUTHENTICATION_REQUEST_SUCCESS';
const AUTHENTICATION_REQUEST_FAIL = 'containers/login/AUTHENTICATION_REQUEST_FAIL';
const TOKEN_INVALID = 'containers/login/TOKEN_INVALID';

// Reducer
export default function reducer(state = {
    isFetching: true,
    isFailing: false,
    isAuthenticated: false,
    error: ""
}, action = {}) {
    switch (action.type) {
        case AUTHENTICATION_REQUEST:
            return { ...state, isFetching: true };
        case AUTHENTICATION_REQUEST_SUCCESS:
            return { ...state, isFetching: false, isFailing: false, isAuthenticated: true };
        case AUTHENTICATION_REQUEST_FAIL:
            return { ...state, isFetching: false, isFailing: true, error: action.error, isAuthenticated: false };
        case TOKEN_INVALID:
            return { ...state, isAuthenticated: false, isFailing: false, isFetching: false };
        default:
            return state;
    }
}

// Action Creators
export function authenticationRequest(token) {
    return { type: AUTHENTICATION_REQUEST };
}

function authenticationRequestSuccess() {
    return { type: AUTHENTICATION_REQUEST_SUCCESS };
}

function authenticationRequestFail(error) {
    return { type: AUTHENTICATION_REQUEST_FAIL, error };
}

function tokenInvalid() {
    return { type: TOKEN_INVALID };
}

export const fetchIsAuthenticated = () => async (dispatch, getState) => {
    const { jwtToken } = getState().authenticationReducer;
    // if (!jwtToken) {
    //     dispatch(tokenInvalid());
    //     return;
    // }
    dispatch(authenticationRequest(jwtToken));
    try {
        let response = await fetch(isAuthenticatedUrl);
        if (!response.ok) {
            dispatch(tokenInvalid());
            return;
        }
        dispatch(authenticationRequestSuccess());
    } catch (ex) {
        dispatch(authenticationRequestFail(ex.message));
    }
};

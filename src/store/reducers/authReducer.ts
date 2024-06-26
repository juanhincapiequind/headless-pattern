import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "../constants";

interface AuthState {
  email: string;
  isLoading: boolean;
  isAuthenticated: boolean;
  error: string | null;
}

const initialState: AuthState = {
  email: "",
  isLoading: false,
  error: null,
  isAuthenticated: false,
};

const authReducer = (state = initialState, action: any): AuthState => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        email: action.payload.email,
        isLoading: false,
        error: null,
        isAuthenticated: true,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
};

export default authReducer;

import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "../constants";

export const loginRequest = () => ({type: LOGIN_REQUEST})
export const loginSuccess = (email:string) => ({type: LOGIN_SUCCESS, payload: {email}})
export const loginFailure = (error:string) => ({type: LOGIN_FAILURE, payload: {error}})
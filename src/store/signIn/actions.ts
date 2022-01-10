import { ApiTypes } from "../../types"
export enum ActionTypes {
  SIGN_IN_REQUEST = 'signIn/SIGN_IN_REQUEST',
  SIGN_IN_SUCCESS = 'signIn/SIGN_IN_SUCCESS',
  SIGN_IN_ERROR = 'signIn/SIGN_IN_ERROR',
}

const signInRequest = (payload) => ({
  type: ActionTypes.SIGN_IN_REQUEST,
  payload,
})

const signInSuccess = () => ({
  type: ActionTypes.SIGN_IN_SUCCESS,
})

export default {
  signInRequest,
  signInSuccess,
};

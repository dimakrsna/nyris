import { ActionTypes } from './actions';
import { AnyAction } from 'redux'

export interface InitialState {
  isSignInRequsted: boolean
  isSignInSuccess: boolean
  isAutorised: boolean
}

const initialState: InitialState = {
  isSignInRequsted: false,
  isSignInSuccess: false,
  isAutorised: false
};

export default function reducer(state = initialState, action: AnyAction) {
  switch (action.type) {
    case ActionTypes.SIGN_IN_REQUEST: {
      return { ...state, ...{ isSignInRequsted: true } };
    }
    case ActionTypes.SIGN_IN_SUCCESS: {
      return {
        ...state, ...{
          isSignInSuccess: true,
          isSignInRequsted: false,
          isAutorised: true,
        }
      };
    }
    case ActionTypes.SIGN_IN_ERROR: {
      return {
        ...state, ...{
          isSignInRequsted: false
        }
      };
    }

    default: {
      return state;
    }
  }
}

import { AnyAction } from 'redux'
import { all, takeEvery, put, call } from 'redux-saga/effects';
import { ActionTypes } from './actions';
import Actions from '../actions'
import { ApiTypes } from '../../types'
import { axiosInstance } from '../../utils/axiosInstance'

export function* watchSignInRequest(action: AnyAction) {
  const body = action.payload

  try {
    const response: ApiTypes.ResponseGenerator = yield call(axiosInstance.post, `/cognito/signIn`, body)

    if (response.status === 200) {
      yield put({ type: ActionTypes.SIGN_IN_SUCCESS })
    }
  } catch (error: any) {
    yield put({ type: ActionTypes.SIGN_IN_ERROR })
  }
}

export default function* rootSaga() {
  yield all([
    takeEvery(ActionTypes.SIGN_IN_REQUEST, watchSignInRequest),
  ]);
}

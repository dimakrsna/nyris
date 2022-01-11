import { all, takeEvery, put, call } from 'redux-saga/effects';
import { ActionTypes } from './actions';
import Actions from '../actions'
import { ApiTypes } from '../../types'
import { axiosInstance } from '../../utils/axiosInstance'
import mock from '../../utils/mocks/searchResult'

export function* watchGetSearchRequest() {
  try {
    const response: ApiTypes.ResponseGenerator = yield call(axiosInstance.get, `/nyris/share/frontend_task/response.json`)
    if (response.status === 200) {
      yield put(Actions.search.getSearchSuccess(response?.data?.results))
    }
  } catch (error) {
    yield put(Actions.search.getSearchError())
    
    // if errro put mock data
    yield put(Actions.search.getSearchSuccess(mock))
  }
}

export default function* rootSaga() {
  yield all([
    takeEvery(ActionTypes.GET_SEARCH_REQUEST, watchGetSearchRequest),
  ]);
}

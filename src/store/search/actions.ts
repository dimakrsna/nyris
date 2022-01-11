import { ApiTypes } from "../../types"
export enum ActionTypes {
  GET_SEARCH_REQUEST = 'search/GET_SEARCH_REQUEST',
  GET_SEARCH_SUCCESS = 'search/GET_SEARCH_SUCCESS',
  GET_SEARCH_ERROR = 'search/GET_SEARCH_ERROR',
}

const getSearchRequest = (payload: string) => ({
  type: ActionTypes.GET_SEARCH_REQUEST,
  payload,
})

const getSearchSuccess = (payload: ApiTypes.SearchResult[]) => ({
  type: ActionTypes.GET_SEARCH_SUCCESS,
  payload
})

const getSearchError = () => ({
  type: ActionTypes.GET_SEARCH_ERROR
})

export default {
  getSearchRequest,
  getSearchSuccess,
  getSearchError,
};

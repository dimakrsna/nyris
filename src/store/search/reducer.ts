import { ApiTypes } from '../../types';
import { ActionTypes } from './actions';
import { AnyAction } from 'redux'

export interface InitialState {
  isSearchRequsted: boolean
  searchValue: string
  result: ApiTypes.SearchResult[]
}

const initialState: InitialState = {
  isSearchRequsted: false,
  searchValue: '',
  result: []
};

export default function reducer(state = initialState, action: AnyAction) {
  switch (action.type) {
    case ActionTypes.GET_SEARCH_REQUEST: {
      return {
        ...state, ...{
          isSearchRequsted: true,
          searchValue: action.payload
        }
      };
    }
    case ActionTypes.GET_SEARCH_SUCCESS: {
      return {
        ...state, ...{
          isSearchRequsted: false,
          result: action.payload
        }
      };
    }
    case ActionTypes.GET_SEARCH_ERROR: {
      return { ...state, ...{ isSearchRequsted: false } };
    }
    default: {
      return state;
    }
  }
}

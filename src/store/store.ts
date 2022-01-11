import { applyMiddleware, combineReducers, createStore, compose } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas'
import search from './search/reducer'

const appReducer = combineReducers({
	search,
})

const rootReducer = (businessState, action) => {
	return appReducer(businessState, action)
}

const sagaMiddleware = createSagaMiddleware()
const middlewares = composeWithDevTools(applyMiddleware(sagaMiddleware))
export const store = createStore(rootReducer, compose(...[middlewares]))

sagaMiddleware.run(rootSaga)
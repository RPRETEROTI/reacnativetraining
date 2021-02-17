import { applyMiddleware, combineReducers, compose, createStore } from "redux"
// import thunk from "redux-thunk";
import createSagaMiddleware from 'redux-saga'
import shop from "./reducers/shop"
import auth from "./reducers/auth"
import rootSaga from "./sagas/authentication"

const rootReducer = combineReducers({ shop, auth })
const sagamiddleware = createSagaMiddleware();

// const store = createStore(rootReducer, applyMiddleware(thunk))
const store = createStore(rootReducer, applyMiddleware(sagamiddleware))

console.log('store', store.getState())
sagamiddleware.run(rootSaga)
export type RootState = ReturnType<typeof store.getState>;
// export type AppThunk<ReturnType = void> = ThunkAction<
//   ReturnType,
//   RootState,
//   unknown,
//   Action<string>
// >;

export { store }
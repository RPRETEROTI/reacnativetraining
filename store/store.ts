import { applyMiddleware, combineReducers, compose, createStore } from "redux"
import thunk from "redux-thunk";

import shop from "./reducers/shop"
import auth from "./reducers/auth"

const rootReducer = combineReducers({ shop, auth })
const store = createStore(rootReducer, applyMiddleware(thunk))
console.log('store', store.getState())
export type RootState = ReturnType<typeof store.getState>;
// export type AppThunk<ReturnType = void> = ThunkAction<
//   ReturnType,
//   RootState,
//   unknown,
//   Action<string>
// >;

export { store }
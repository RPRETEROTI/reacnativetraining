import { applyMiddleware, combineReducers, compose, createStore } from "redux"
import thunk from "redux-thunk";

import shop from "./reducers/shop"
import auth from "./reducers/auth"

const rootReducer = combineReducers({ shop, auth })
const enhancer = compose(applyMiddleware(thunk))
const store = createStore(rootReducer, enhancer)
export type RootState = ReturnType<typeof store.getState>;
// export type AppThunk<ReturnType = void> = ThunkAction<
//   ReturnType,
//   RootState,
//   unknown,
//   Action<string>
// >;

export { store }
import { combineReducers, createStore } from "redux"
import shop from "./reducers/shop"
import auth from "./reducers/auth"

const rootReducer = combineReducers({ shop, auth })
const store = createStore(rootReducer)
export type RootState = ReturnType<typeof store.getState>;

export { store }
import { put, takeEvery, all, call, fork } from "redux-saga/effects";
import { createRoutine } from "redux-saga-routines";
import { loginService, signupService } from "../../services/auth_service";
import { LOGIN, SIGNUP } from "../types/types";

// const payload = {};
export const signuproutine = createRoutine(SIGNUP);

export const loginroutine = createRoutine(LOGIN);

//SIGN IN
export function* signupworker(action: any) {
  //call api
  const { payload } = action;
  const { err, data } = yield call(signupService(payload));
  if (data) {
    console.log('payload', payload)
    yield put(signuproutine.success({ token: data.idToken, userId: data.localId, expireIn: parseInt(data.expiresIn) * 1000, email: data.email }));
  } else {
    yield put(signuproutine.failure(err));
  }
}
export function* test(action: any) {
  //call api
  console.log('x', action)
}
export function* signinwatcher() {
  yield takeEvery(signuproutine.REQUEST, test);
}

//Login
export function* loginworker(payload: any) {
  console.log('payload', payload)
  //call api
  const { data } = yield call(loginService, payload);
  try {
    yield put(loginroutine.SUCCESS as any, { token: data.idToken, userId: data.localId, expireIn: parseInt(data.expiresIn) * 1000, email: data.email });
  } catch (error) {
    yield put(loginroutine.FAILURE as any, error);
  }
}

export function* loginwatcher() {
  yield takeEvery(loginroutine.REQUEST, loginworker);
}
export default function* rootSaga() {
  yield fork([signinwatcher, loginwatcher]);
}

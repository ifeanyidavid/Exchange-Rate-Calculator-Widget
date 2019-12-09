import { all, put, fork, call, delay } from "redux-saga/effects";
import { getEURRates, getGBPRates, getUSDRates } from "./api";
import {
  saveRatesFail,
  saveRatesStart,
  saveRatesDone
} from "../actionCreators";

function* getAllRates() {
  yield put(saveRatesStart());
  try {
    const response = yield all([
      call(getEURRates),
      call(getGBPRates),
      call(getUSDRates)
    ]);
    yield put(saveRatesDone(response));
  } catch (error) {
    yield put(saveRatesFail(error));
  }
}

function* refresh() {
  while (true) {
    yield getAllRates();
    yield delay(10000);
  }
}

export default function* rootData() {
  yield all([fork(refresh)]);
}

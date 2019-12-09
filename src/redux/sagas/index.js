import { fork, all } from "redux-saga/effects";

import rootData from "./rootData";

// Watcher saga
export default function* rootSaga() {
  yield all([fork(rootData)]);
}

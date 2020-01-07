import { all } from "redux-saga/effects"
import signInSaga from "./signin/saga"
import signUpSaga from "./signup/saga"

export default function* rootSaga() {
  try {
    yield all([...signInSaga, ...signUpSaga])
  } catch (err) {
    console.log("error caught in rootsaga", err)
  }
}

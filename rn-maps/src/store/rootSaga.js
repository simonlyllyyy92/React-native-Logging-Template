import { all } from "redux-saga/effects"
import signInSaga from "./signin/saga"
import signUpSaga from "./signup/saga"
import userInfoSaga from "./appUser/saga"

export default function* rootSaga() {
  try {
    yield all([...signInSaga, ...signUpSaga, ...userInfoSaga])
  } catch (err) {
    console.log("error caught in rootsaga", err)
  }
}

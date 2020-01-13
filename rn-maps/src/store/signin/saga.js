import { fork, put, takeLatest, race, take } from "redux-saga/effects"
import { SignInActionTypes } from "./constant"
import axios from "../../api/config"
import { navigate } from "../../navigationService"

//handler
function* handlePostSignIn(action) {
  const { email, password } = action.payload
  try {
    const signInResponse = yield axios.post(
      "/signin",
      { email, password },
      {
        headers: {
          "Content-Type": "application/json"
        }
      }
    )
    console.log("登陆状态", signInResponse.data)

    yield put({
      type: SignInActionTypes.POST_SIGNIN_ACTION_SUCCESS,
      payload: signInResponse.data
    })

    navigate("MainFlow")
  } catch (err) {
    yield put({
      type: SignInActionTypes.POST_SIGNIN_ACTION_FAILED
    })

    navigate("Signin")
    console.log(err)
  }
}

//watchers
function* watchPostSignIn() {
  yield takeLatest(SignInActionTypes.POST_SIGNIN_ACTION, handlePostSignIn)
}

const sagas = [fork(watchPostSignIn)]

export default sagas

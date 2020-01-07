import { fork, put, takeLatest, race, take } from "redux-saga/effects"
import { SignUpActionTypes } from "./constant"
import axios from "../../api/config"
import _ from "lodash"
import { navigate } from "../../navigationService"

function* handlePostSignUp(action) {
  const { email, password } = action.payload
  try {
    const signUpResponse = yield axios.post(
      "/signup",
      { email, password },
      {
        headers: {
          "Content-Type": "application/json"
        }
      }
    )
    console.log("sign up", signUpResponse.data)
    if (!_.isEmpty(signUpResponse.data)) {
      yield put({
        type: SignUpActionTypes.POST_SIGNUP_ACTION_SUCCESS,
        payload: signUpResponse.data
      })
      navigate("Signin")
    }
  } catch (e) {
    console.log(e)
  }
}

//watcher
function* watchPostSignUp() {
  yield takeLatest(SignUpActionTypes.POST_SIGNUP_ACTION, handlePostSignUp)
}

const sagas = [fork(watchPostSignUp)]

export default sagas
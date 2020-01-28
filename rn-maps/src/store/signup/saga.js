import { fork, put, takeLatest, race, take } from "redux-saga/effects"
import { SignUpActionTypes } from "./constant"
import axios from "../../api/config"
import _ from "lodash"
import { navigate } from "../../navigationService"
import { showAlert } from "../generalAlert/action"

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

    if (!_.isEmpty(signUpResponse.data)) {
      yield put({
        type: SignUpActionTypes.POST_SIGNUP_ACTION_SUCCESS,
        payload: signUpResponse.data
      })
      navigate("Signin")
      yield put(showAlert("Sign up successful !"))
    } else {
      yield put(showAlert("Sign up failed, please try again !"))
    }
  } catch (e) {
    yield put({
      type: SignUpActionTypes.POST_SIGNUP_ACTION_FAILED
    })
    yield put(showAlert("Sign up failed, please try again !"))
    navigate("Signup")
  }
}

//watcher
function* watchPostSignUp() {
  yield takeLatest(SignUpActionTypes.POST_SIGNUP_ACTION, handlePostSignUp)
}

const sagas = [fork(watchPostSignUp)]

export default sagas

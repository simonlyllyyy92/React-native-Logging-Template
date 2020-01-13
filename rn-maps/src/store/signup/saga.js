import { fork, put, takeLatest, race, take } from "redux-saga/effects"
import { SignUpActionTypes } from "./constant"
import axios from "../../api/config"
import _ from "lodash"
import { navigate } from "../../navigationService"
import { showMessage } from "react-native-messages"

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
      showMessage("Sign up success, please log in!")
      yield put({
        type: SignUpActionTypes.POST_SIGNUP_ACTION_SUCCESS,
        payload: signUpResponse.data
      })
      navigate("Signin")
    } else {
    }
  } catch (e) {
    yield put({
      type: SignUpActionTypes.POST_SIGNUP_ACTION_FAILED
    })
    navigate("Signup")
    showMessage("Sign Up failed please try again!")
  }
}

//watcher
function* watchPostSignUp() {
  yield takeLatest(SignUpActionTypes.POST_SIGNUP_ACTION, handlePostSignUp)
}

const sagas = [fork(watchPostSignUp)]

export default sagas

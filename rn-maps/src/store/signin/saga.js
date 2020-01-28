import { fork, put, takeLatest, race, take } from "redux-saga/effects"
import { AsyncStorage } from "react-native"
import { SignInActionTypes } from "./constant"
import axios from "../../api/config"
import { navigate } from "../../navigationService"
import { showAlert } from "../generalAlert/action"

//handler
function* handlePostSignIn(action) {
  const { email, password } = action.payload

  const _storeData = async props => {
    try {
      await AsyncStorage.setItem("Login token", props)
    } catch (error) {
      // Error saving data
    }
  }
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

    yield put({
      type: SignInActionTypes.POST_SIGNIN_ACTION_SUCCESS
    })

    _storeData(signInResponse.data.token)
    yield put(showAlert("Sign in success !"))
    navigate("MainFlow")
  } catch (err) {
    yield put({
      type: SignInActionTypes.POST_SIGNIN_ACTION_FAILED
    })
    yield put(showAlert("Sign in failed, please try again !"))
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

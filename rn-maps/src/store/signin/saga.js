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

    yield put({ type: SignInActionTypes.CLEAR_SIGNIN_STATE })

    _storeData(signInResponse.data.token)

    yield put(showAlert("Sign in success !"))
    navigate("MainFlow")
  } catch (err) {
    yield put({ type: SignInActionTypes.CLEAR_SIGNIN_STATE })
    yield put(showAlert("Sign in failed, please try again !"))
    navigate("Signin")
    console.log(err)
  }
}

function* handleFbSignIn(action) {
  const { payload } = action
  const _removeData = async () => {
    try {
      await AsyncStorage.removeItem("Login token")
      navigate("MainFlow")
    } catch (error) {
      // Error retrieving data
    }
  }

  try {
    yield put({
      type: SignInActionTypes.FB_SIGN_IN_SUCCESS,
      payload: payload
    })
    _removeData()
  } catch (e) {
    console.log(e)
  }
}

//watchers
function* watchPostSignIn() {
  yield takeLatest(SignInActionTypes.POST_SIGNIN_ACTION, handlePostSignIn)
}

function* watchFbLogin() {
  yield takeLatest(SignInActionTypes.FB_SIGN_IN, handleFbSignIn)
}

const sagas = [fork(watchPostSignIn), fork(watchFbLogin)]

export default sagas

import { fork, put, takeLatest, select } from "redux-saga/effects"
import { AsyncStorage } from "react-native"
import axios from "../../api/config"
import { UserInfoActionTypes } from "./constant"
import _ from "lodash"

function* handleGetUserInfo(action) {
  const { payload } = action

  const _storeData = async props => {
    try {
      await AsyncStorage.setItem("Login token", props)
    } catch (error) {
      // Error saving data
    }
  }

  try {
    const userInfoResponse = yield axios.get("/", {
      headers: {
        Authorization: `Bearer ${payload}`
      }
    })

    if (!_.isEmpty(userInfoResponse.data)) {
      yield put({
        type: UserInfoActionTypes.GET_USER_AUTH_INFO_SUCCESS,
        payload: userInfoResponse.data
      })
      _storeData(payload)
    }
  } catch (e) {
    console.log(e)
  }
}

//watchers
function* watchGetUserInfo() {
  yield takeLatest(UserInfoActionTypes.GET_USER_AUTH_INFO, handleGetUserInfo)
}

const sagas = [fork(watchGetUserInfo)]

export default sagas

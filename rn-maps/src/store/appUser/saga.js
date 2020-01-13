import { fork, put, takeLatest, select } from "redux-saga/effects"
import { AsyncStorage } from "react-native"
import axios from "../../api/config"
import { UserInfoActionTypes } from "./constant"
import _ from "lodash"

function* handleGetUserInfo(action) {
  try {
    const value = yield AsyncStorage.getItem("Login token")
    const userInfoResponse = yield axios.get("/", {
      headers: {
        Authorization: `Bearer ${value}`
      }
    })

    if (!_.isEmpty(userInfoResponse.data)) {
      yield put({
        type: UserInfoActionTypes.GET_USER_AUTH_INFO_SUCCESS,
        payload: userInfoResponse.data
      })
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

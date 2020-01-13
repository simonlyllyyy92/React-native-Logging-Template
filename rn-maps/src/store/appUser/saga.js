import { fork, put, takeLatest, select } from "redux-saga/effects"
import axios from "../../api/config"
import { UserInfoActionTypes } from "./constant"
import _ from "lodash"

function* handleGetUserInfo(action) {
  const token = yield select(state => state.signIn.signInInfo.data)
  try {
    const userInfoResponse = yield axios.get("/", {
      headers: {
        Authorization: `Bearer ${token.token}`
      }
    })
    console.log("userinfo", userInfoResponse)
    if (!_.isEmpty(userInfoResponse.data)) {
      yield put({
        type: UserInfoActionTypes.GET_USER_AUTH_INFO_SUCCESS,
        payload: userInfoResponse.data
      })
      console.log(userInfoResponse.data)
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

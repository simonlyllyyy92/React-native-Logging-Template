import { UserInfoActionTypes } from "./constant"

export const getUserAuthInfo = payload => ({
  type: UserInfoActionTypes.GET_USER_AUTH_INFO,
  payload
})

export const storeNumber = payload => ({
  type: UserInfoActionTypes.STORE_NUMBER,
  payload
})

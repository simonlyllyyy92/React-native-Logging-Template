import { UserInfoActionTypes } from "./constant"

export const getUserAuthInfo = () => ({
  type: UserInfoActionTypes.GET_USER_AUTH_INFO
})

export const storeNumber = payload => ({
  type: UserInfoActionTypes.STORE_NUMBER,
  payload
})

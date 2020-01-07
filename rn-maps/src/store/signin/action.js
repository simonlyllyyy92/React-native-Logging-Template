import { SignInActionTypes } from "./constant"

export const postSignIn = payload => ({
  type: SignInActionTypes.POST_SIGNIN_ACTION,
  payload
})

import { SignInActionTypes } from "./constant"

export const postSignIn = payload => ({
  type: SignInActionTypes.POST_SIGNIN_ACTION,
  payload
})

export const FBSignIn = payload => ({
  type: SignInActionTypes.FB_SIGN_IN,
  payload
})

export const cleanSignInState = () => ({
  type: SignInActionTypes.CLEAR_SIGNIN_STATE
})

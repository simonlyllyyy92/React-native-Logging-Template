import { SignUpActionTypes } from "./constant"

export const postSignUp = payload => ({
  type: SignUpActionTypes.POST_SIGNUP_ACTION,
  payload
})

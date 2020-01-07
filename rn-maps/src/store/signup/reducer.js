import { SignUpActionTypes } from "./constant"

const initialState = {
  signUpInfo: {
    isLoading: false,
    error: {},
    data: {}
  }
}

export default (state = initialState, action) => {
  const payload = action.payload
  switch (action.type) {
    case SignUpActionTypes.POST_SIGNUP_ACTION:
      return {
        ...state,
        signUpInfo: {
          isLoading: true,
          error: {},
          data: {}
        }
      }
    case SignUpActionTypes.POST_SIGNUP_ACTION_SUCCESS:
      return {
        ...state,
        signUpInfo: {
          isLoading: false,
          error: {},
          data: payload
        }
      }

    default:
      return state
  }
}

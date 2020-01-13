import { SignInActionTypes } from "./constant"

export const initialState = {
  signInInfo: {
    isLoading: false,
    error: {},
    data: {}
  }
}

export const reducer = (state = initialState, action) => {
  const payload = action.payload
  switch (action.type) {
    case SignInActionTypes.POST_SIGNIN_ACTION:
      return {
        ...state,
        signInInfo: {
          isLoading: true,
          error: {},
          data: {}
        }
      }

    case SignInActionTypes.POST_SIGNIN_ACTION_SUCCESS:
      return {
        ...state,
        signInInfo: {
          isLoading: false,
          error: {},
          data: {}
        }
      }
    case SignInActionTypes.POST_SIGNIN_ACTION_FAILED:
      return {
        ...state,
        signInInfo: {
          isLoading: false,
          error: {},
          data: {}
        }
      }

    case SignInActionTypes.CLEAR_LOGGIN_REDUCER:
      return {
        ...state,
        signinInfo: {
          isLoading: false,
          error: {},
          data: {}
        }
      }
    default:
      return state
  }
}

export default reducer

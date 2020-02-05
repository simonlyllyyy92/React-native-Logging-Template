import { SignInActionTypes } from "./constant"

export const initialState = {
  signInInfo: {
    isLoading: false,
    error: {},
    data: {}
  },
  FbSigninInfo: {
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
          data: payload
        }
      }

    case SignInActionTypes.FB_SIGN_IN_SUCCESS:
      return {
        ...state,
        FbSigninInfo: {
          isLoading: false,
          error: {},
          data: payload
        }
      }
    case SignInActionTypes.CLEAR_SIGNIN_STATE:
      // return {
      //   ...state,
      //   FbSigninInfo: {
      //     ...initialState.FbSigninInfo
      //   }
      // }
      return initialState
    default:
      return state
  }
}

export default reducer

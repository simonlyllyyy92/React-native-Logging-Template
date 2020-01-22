import { UserInfoActionTypes } from "./constant"

export const initialState = {
  userInfo: {
    isLoading: false,
    error: {},
    data: ""
  },
  storedNum: {
    isLoading: false,
    error: {},
    data: 0
  }
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UserInfoActionTypes.GET_USER_AUTH_INFO:
      return {
        ...state,
        userInfo: {
          isLoading: true,
          error: {},
          data: ""
        }
      }
    case UserInfoActionTypes.GET_USER_AUTH_INFO_SUCCESS:
      return {
        ...state,
        userInfo: {
          isLoading: false,
          error: {},
          data: action.payload
        }
      }
    case UserInfoActionTypes.STORE_NUMBER:
      return {
        ...state,
        storedNum: {
          isLoading: false,
          error: {},
          data: action.payload
        }
      }
    default:
      return state
  }
}

export default reducer

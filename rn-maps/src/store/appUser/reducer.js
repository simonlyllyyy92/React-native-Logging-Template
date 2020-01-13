import { UserInfoActionTypes } from "./constant"

export const initialState = {
  userInfo: {
    isLoading: false,
    error: {},
    data: ""
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
    default:
      return state
  }
}

export default reducer

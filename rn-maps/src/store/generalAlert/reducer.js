import { GlobalAlertConstants } from "./constant"

const initialState = {
  alertMsg: "",
  show: false
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GlobalAlertConstants.SHOW_ALERT:
      console.log(action.payload.message)
      return {
        ...state,
        alertMsg: action.payload.message,
        show: true
      }
    case GlobalAlertConstants.DISMISS_ALERT:
      return {
        ...state,
        alertMsg: "",
        show: false
      }
    default:
      return state
  }
}

export default reducer

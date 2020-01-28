import { GlobalAlertConstants } from "./constant"

export const dismissAlert = () => ({
  type: GlobalAlertConstants.DISMISS_ALERT
})

export const showAlert = message => ({
  type: GlobalAlertConstants.SHOW_ALERT,
  payload: {
    message
  }
})

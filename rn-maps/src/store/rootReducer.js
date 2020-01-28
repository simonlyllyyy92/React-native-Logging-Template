import { combineReducers } from "redux"
import signInReducer from "./signin/reducer"
import signUpReducer from "./signup/reducer"
import userInfoReducer from "./appUser/reducer"
import generalAlertReducer from "./generalAlert/reducer"

const rootReducer = combineReducers({
  signIn: signInReducer,
  signUp: signUpReducer,
  userInfo: userInfoReducer,
  generalAlert: generalAlertReducer
})

export default rootReducer

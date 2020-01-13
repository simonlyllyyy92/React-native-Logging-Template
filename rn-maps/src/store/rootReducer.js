import { combineReducers } from "redux"
import signInReducer from "./signin/reducer"
import signUpReducer from "./signup/reducer"
import userInfoReducer from "./appUser/reducer"

const rootReducer = combineReducers({
  signIn: signInReducer,
  signUp: signUpReducer,
  userInfo: userInfoReducer
})

export default rootReducer

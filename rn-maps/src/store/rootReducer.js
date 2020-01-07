import { combineReducers } from "redux"
import signInReducer from "./signin/reducer"
import signUpReducer from "./signup/reducer"

const rootReducer = combineReducers({
  signIn: signInReducer,
  signUp: signUpReducer
})

export default rootReducer

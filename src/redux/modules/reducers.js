import { combineReducers } from "redux"

//modules
import settings from "./settings/reducer"
import user from "./user/reducer"

export default combineReducers({
    settings,
    user
})
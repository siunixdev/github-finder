import { combineReducers } from 'redux'
import gitReducer from './gitReducer'

const rootReducer = combineReducers({
  gitState: gitReducer
})

export default rootReducer
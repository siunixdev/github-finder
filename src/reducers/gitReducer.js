import {
  GIT_LIST,
  GIT_DETAIL,
  GIT_REPO_LIST
} from '../actions/constants'

const initialState = {
  list: null,
  detail: null,
  repoList: null
}

const gitReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case `${GIT_LIST}`:
      return {
        ...state,
        list: actions.data
      }
    case `${GIT_DETAIL}`:
      return {
        ...state,
        detail: actions.data
      }
    case `${GIT_REPO_LIST}`:
      return {
        ...state,
        repoList: actions.data
      }
    default:
      return {
        ...state
      }
  }
}

export default gitReducer
import {
  GIT_LIST,
  GIT_DETAIL,
  GIT_REPO_LIST
} from '../actions/constants'
import { apiClient } from '../helpers/apiServices'

export const gitList = (payload) => ({
  type: GIT_LIST,
  data: payload.data
})

export const gitDetail = (payload) => ({
  type: GIT_DETAIL,
  data: payload.data
})

export const gitRepoList = (payload) => ({
  type: GIT_REPO_LIST,
  data: payload.data
})

export const gitAccountList = (keyword) => {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      let data = new Object()
      apiClient.get(`search/users?q=${keyword}`)
        .then(res => {
          dispatch(gitList({
            'data': res.data.items
          }))

          resolve()
        }).catch(err => {
          dispatch(gitList({
            'data': null
          }))
        })

    })
  }
}
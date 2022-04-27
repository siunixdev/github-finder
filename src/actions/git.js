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

export const gitAccountDetail = (keyword) => {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      apiClient.get(`users/${keyword}`)
        .then(res => {
          dispatch(gitDetail({
            'data': res.data
          }))

          resolve()
        }).catch(err => {
          dispatch(gitDetail({
            'data': null
          }))
        })

    })
  }
}

export const gitAccountRepoList = (keyword) => {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      apiClient.get(`users/${keyword}/repos?sort=pushed&direction=desc`)
        .then(res => {
          dispatch(gitRepoList({
            'data': res.data
          }))

          resolve()
        }).catch(err => {
          dispatch(gitRepoList({
            'data': null
          }))
        })

    })
  }
}
import React, { useEffect } from 'react'
import Card from '../components/card/Card'
import {
  LocationMarkerIcon,
  UserIcon
} from '@heroicons/react/outline'
import './Pages.sass'
import RepoList from '../components/repolist/RepoList'
import { useParams } from 'react-router-dom'
import { gitAccountDetail, gitAccountRepoList } from '../actions/git'
import { useDispatch, useSelector } from 'react-redux'

function Detail() {
  const params = useParams()
  const dispatch = useDispatch()
  const detail = useSelector(state => state.gitState.detail)

  let user = params.user

  const getData = () => {
    dispatch(gitAccountDetail(user))
    dispatch(gitAccountRepoList(user))
  }

  console.log(detail);

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className='container mx-auto'>
      <div className='detail'>
        <Card>
          <div className='detail__user'>
            <img
              src={detail && detail.avatar_url ? detail.avatar_url : ""}
              className='list__image'
            />
            <div className='user'>
              <span className='user-name'>{detail && detail.name ? detail.name : "Undefined"}</span>
              <div className='user-sub'>
                <UserIcon
                  className='user-icon'
                />
                <span className='user-text'>
                  {detail && detail.login ? detail.login : "Not Registered"}
                </span>
              </div>
              <div className='user-sub'>
                <LocationMarkerIcon
                  className='user-icon'
                />
                <span className='user-text'>
                  {detail && detail.location ? detail.location : "Not Registered"}
                </span>
              </div>
            </div>
          </div>
        </Card>
        <RepoList />
      </div>
    </div>
  )
}

export default Detail
import React from 'react'
import Card from '../components/card/Card'
import {
  LocationMarkerIcon,
  MailIcon
} from '@heroicons/react/outline'
import './Pages.sass'
import RepoList from '../components/repolist/RepoList'

function Detail() {
  return (
    <div className='container mx-auto'>
      <div className='detail'>
        <Card>
          <div className='detail__user'>
            <img
              src='https://avatars.githubusercontent.com/u/51237?v=4'
              className='list__image'
            />
            <div className='user'>
              <span className='user-name'>Username</span>
              <div className='user-sub'>
                <MailIcon
                  className='user-icon'
                />
                <span className='user-text'>
                  abd.siunix@gmail.com
                </span>
              </div>
              <div className='user-sub'>
                <LocationMarkerIcon
                  className='user-icon'
                />
                <span className='user-text'>
                  Location
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
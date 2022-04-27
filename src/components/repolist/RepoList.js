import React from 'react'
import Card from '../card/Card'
import './RepoList.sass'
import {
  LinkIcon
} from '@heroicons/react/outline'

function RepoList() {
  return (
    <div className='container mx-auto'>
      <div className='repo-list'>
        <div className='repo-list__body'>
          <div className='repo-list__detail'>
            <span className='repo-list__title'>login Name</span>
            <div className='repo-list__detail-link'>
              <LinkIcon
                className='w-4 h-4'
              />
              <span>
                Link
              </span>
            </div>
          </div>
          <div className='flex justify-between'>
            <span className='repo-list__description'>Bahasa</span>
            <span className='repo-list__description'>Last Update at </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RepoList
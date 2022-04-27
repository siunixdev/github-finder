import React from 'react'
import './RepoList.sass'
import {
  LinkIcon
} from '@heroicons/react/outline'
import { useSelector } from 'react-redux'
import moment from 'moment'

function RepoList() {
  const list = useSelector(state => state.gitState.repoList)

  return (
    <div className='container mx-auto'>
      <div className='repo-list'>
        {
          list ? list.map((data, i) => (
            <div className='repo-list__body'>
              <div className='repo-list__detail'>
                <span className='repo-list__title'>{data.name}</span>
                <a href={data.html_url} target="_blank">
                  <div className='repo-list__detail-link'>
                    <LinkIcon
                      className='w-4 h-4'
                    />
                    <span>
                      Link
                    </span>
                  </div>
                </a>
              </div>
              <div className='flex justify-between'>
                <span className='repo-list__description'>{data.language}</span>
                <span className='repo-list__description'>Last Update at {moment(data.pushed_at).format("DD MMM YYYY HH:mm:ss")}</span>
              </div>
            </div>
          )) : (
            <div>No Data</div>
          )
        }
      </div>
    </div>
  )
}

export default RepoList
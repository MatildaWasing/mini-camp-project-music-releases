import React from 'react'
import { Album } from './Album.jsx'

export const List = (props) => {
  return (
    <div className="list">
      <Album
        albums={props.albumList} />
    </div>
  )
}
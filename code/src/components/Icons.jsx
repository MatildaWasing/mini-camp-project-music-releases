import React from 'react'
import heart from '../style/icons/heart.svg'
import play from '../style/icons/play.svg'
import dots from '../style/icons/dots.svg'

export const Icons = () => {
  return (
    <div className="icons">
      <img
        src={heart}
        alt="Like"
        className="icon-active" />
      <img
        src={play}
        alt="Play"
        className="icon-active" />
      <img
        src={dots}
        alt="More"
        className="icon-active" />
    </div>
  )
}
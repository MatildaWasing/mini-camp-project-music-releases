import React from 'react'
import heart from '../icons/heart.svg'
import play from '../icons/play.svg'
import dots from '../icons/dots.svg'

export const Icons = () => {
  return (
    <div className="icons">
      <img src={heart} alt="Heart" className="icon-active" />
      <img src={play} alt="Play" className="icon-active" />
      <img src={dots} alt="Dots" className="icon-active" />
    </div>
  )
}
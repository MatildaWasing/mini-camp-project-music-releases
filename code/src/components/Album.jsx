import React from 'react'
import { Image } from './Image'
import { Description } from './Description'
import { Icons } from './Icons'

export const Album = (props) => {
  return (
    <div className="img-wrapper">
      {props.albums.sort((a, b) => {
        return new Date(a.releaseDate) - new Date(b.releaseDate);
      }).map((item, index) => {
        return (
          <div key={index}>
            <div className="img-box">
              <Image images={item.images} height={640} />
              <Icons />
            </div>
            <Description
              artists={item.artists}
              albumUrl={item.externalUrls.spotify}
              albumTitle={item.name} />
          </div>
        )
      })}
    </div>
  )
}
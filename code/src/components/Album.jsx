import React from 'react'
import { Image } from './Image'
import { Description } from './Description'
import { Icons } from './Icons'

export const Album = (props) => {
  return (
    <div className="img-wrapper">
      {props.albums.map((item, index) => {
        return (
          <div key={index}>
            <div className="img-box">
              <Image
                images={item.images}
                height={640} />
              <Icons />
            </div>
            <Description
              artists={item.artists}
              url={item.externalUrls.spotify}
              album={item.name} />
          </div>
        )
      })}
    </div>
  )
}
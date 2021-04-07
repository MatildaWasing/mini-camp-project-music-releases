import React from 'react'

export const Description = (props) => {
  const {
    artists,
    url,
    album
  } = props
  const artistList = artists.map(({ name, externalUrls }, index) => {
    const space = ', '
    return (
      <span key={index}>
        <a href={externalUrls.spotify}>
          {name}
        </a>
        {props.artists.length - 1 > index && space}
      </span>
    )
  })

  return (
    <div className="description">
      <span className="album">
        <a href={url}>
          {album}
        </a>
      </span>
      <span className="artists">
        {artistList}
      </span>
    </div>
  )
}
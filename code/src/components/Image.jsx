import React from 'react'

export const Image = (props) => {
  const image = props.height ? props.images?.find(
    (item) => item?.height === props.height
  ) : props.images[0]
  return (
    <div className="img-overlay">
      <img src={image.url} className="img" alt="Album cover" />
    </div>
  )
}
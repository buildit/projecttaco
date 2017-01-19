import React from 'react';

const PlaceholderImage = ({ width = 100, height = 100, label="" }) => {
  const placeholderImageStyle = {
    background: 'aqua',
    backgroundSize: 'cover',
    backgroundImage: `url(http://www.placehold.it/${width}x${height})`,
    width,
    height,
  }
  return (
    <div style={placeholderImageStyle}>{label}</div>
  )
}

export default PlaceholderImage;

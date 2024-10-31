
import React from 'react';

const images = require.context('../assets', false, /\.(png|jpe?g|webp|svg)$/);

interface ImageProps {
  ariaLabel?: string; 
  src: string;
  className: string;
  width?: number;
  height?: number;
  alt: string;
}

const ImageComp = ({ ariaLabel, src, className, width, height, alt }: ImageProps) => {
  let imageSrc;
  
  try {
    imageSrc = images(`./${src}`);
  } catch (err) {
    console.error(`Image ${src} not found`);
    return null; // Return null if the image doesn't exist
  }

  return (
    <img
      aria-label={ariaLabel}
      src={imageSrc}
      className={className}
      width={width}
      height={height}
      alt={alt}
      loading='lazy'
    />
  )
};

export default ImageComp;
import React from 'react';

const OptimizedImage = ({ 
  src, 
  alt, 
  className = "", 
  width, 
  height,
  loading = "lazy",
  decoding = "async",
  ...props 
}) => {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      width={width}
      height={height}
      loading={loading}
      decoding={decoding}
      style={{ 
        maxWidth: '100%', 
        height: 'auto',
        aspectRatio: width && height ? `${width}/${height}` : 'auto'
      }}
      {...props}
    />
  );
};

export default OptimizedImage;

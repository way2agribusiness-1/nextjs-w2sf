
import React, { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { ZoomPanPinch, TransformComponent, TransformWrapper } from 'react-zoom-pan-pinch';

const ImageZoom = ({ item }) => {
  const [zoomLevel, setZoomLevel] = useState(1);

  const handleZoomChange = (newZoomLevel) => {
    setZoomLevel(newZoomLevel);
  };

  return (
    <TransformWrapper
      initialScale={1}
      initialPositionX={0}
      initialPositionY={0}
      onZoomChange={(newZoomLevel) => handleZoomChange(newZoomLevel)}
    >
      <TransformComponent>
        <LazyLoadImage
          src={item.url}
          alt=""
          style={{
            width: '25%',
            height: '70%',
            display: 'block',
          }}
        />
      </TransformComponent>
    </TransformWrapper>
  );
};

export default ImageZoom;

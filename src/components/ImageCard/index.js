import React, { useEffect, useState } from 'react';
import Skeleton from '../Skeleton';

import { Card, Title } from './styles';

const ImageCard = ({ restaurant }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const photo = restaurant.photos ? restaurant.photos[0].getUrl() : restaurant.icon;

  useEffect(() => {
    const imageLoader = new Image();
    imageLoader.src = photo;
    imageLoader.onload = () => setImageLoaded(true);
  }, [photo]);

  return (
    <>
      {imageLoaded ? (
        <Card photo={photo}>
          <Title>{restaurant.name}</Title>
        </Card>
      ) : (
        <Skeleton width="90px" height="90px" />
      )}
    </>
  );
};

export default ImageCard;

import React from 'react';
import { Card, Title } from './styles';

const ImageCard = ({ restaurant }) => (
  <Card photo={restaurant.photos ? restaurant.photos[0].getUrl() : restaurant.icon}>
    <Title>{restaurant.name}</Title>
  </Card>
);

export default ImageCard;

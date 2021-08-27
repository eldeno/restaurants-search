import React from 'react';
import { Card, Title } from './styles';

const ImageCard = ({ photo, title }) => (
  <Card photo={photo}>
    <Title>{title}</Title>
  </Card>
);

export default ImageCard;

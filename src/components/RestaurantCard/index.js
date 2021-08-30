import React from 'react';
import ReactStars from 'react-rating-stars-component';

import { Restaurant, RestaurantInfo, Title, Address } from './styles';

const RestaurantCard = () => {
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };

  return (
    <Restaurant>
      <RestaurantInfo>
        <Title>Nome do restaurante</Title>
        <ReactStars count={5} onChange={ratingChanged} size={24} activeColor="#ffd700" />
        <Address>Haddock Lobo, 1080</Address>
      </RestaurantInfo>
    </Restaurant>
  );
};
export default RestaurantCard;

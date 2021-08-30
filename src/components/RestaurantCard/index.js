import React from 'react';
import ReactStars from 'react-rating-stars-component';

import restaurante from '../../assets/restaurante-fake.png';

import { Restaurant, RestaurantInfo, Title, Address, RestaurantPhoto } from './styles';

const RestaurantCard = () => {
  return (
    <Restaurant>
      <RestaurantInfo>
        <Title>Nome do restaurante</Title>
        <ReactStars count={5} isHalf edit={false} value={4} size={24} activeColor="#e7711c" />
        <Address>Haddock Lobo, 1080</Address>
      </RestaurantInfo>
      <RestaurantPhoto src={restaurante} alt="Foto do restaurante" />
    </Restaurant>
  );
};
export default RestaurantCard;

import React, { useState } from 'react';
import TextField, { Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';

import logo from '../../assets/logo.svg';
import restaurantImg from '../../assets/restaurante-fake.png';
import { Card } from '../../components';

import { Container, Logo, Search, Wrapper, Map, CarouselTitle, Carousel } from './styles';

export function Home() {
  const [inputValue, setInputValue] = useState('');

  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    adaptiveHeight: true,
  };

  return (
    <Wrapper>
      <Container>
        <Search>
          <Logo src={logo} alt="Logotipo" />
          <TextField
            label="Search restaurants"
            outlined
            trailingIcon={<MaterialIcon role="button" icon="search" />}>
            <Input
              value={inputValue}
              onChange={(e) => {
                setInputValue(e.target.value);
              }}
            />
          </TextField>
          <CarouselTitle>Na sua área</CarouselTitle>
          <Carousel {...settings}>
            <Card photo={restaurantImg} title="Nome do restaurante" />
            <Card photo={restaurantImg} title="Nome do restaurante" />
            <Card photo={restaurantImg} title="Nome do restaurante" />
            <Card photo={restaurantImg} title="Nome do restaurante" />
            <Card photo={restaurantImg} title="Nome do restaurante" />
            <Card photo={restaurantImg} title="Nome do restaurante" />
          </Carousel>
        </Search>
      </Container>
      <Map />
    </Wrapper>
  );
}

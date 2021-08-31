import React, { useState } from 'react';
import TextField, { Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';

import logo from '../../assets/logo.svg';
import restaurantImg from '../../assets/restaurante-fake.png';
import { Card, RestaurantCard, Modal, Map } from '../../components';

import { Container, Logo, Search, Wrapper, CarouselTitle, Carousel } from './styles';

export function Home() {
  const [inputValue, setInputValue] = useState('');
  const [query, setQuery] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    adaptiveHeight: true,
  };

  function handleKeyPress(e) {
    if (e.key === 'Enter') {
      setQuery(inputValue);
    }
  }

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
              onKeyPress={handleKeyPress}
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
        <RestaurantCard />
      </Container>
      <Map query={query} />
      <Modal
        open={modalOpen}
        onClose={() => {
          setModalOpen(!modalOpen);
        }}
      />
    </Wrapper>
  );
}

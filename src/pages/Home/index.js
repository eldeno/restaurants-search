import React, { useState } from 'react';
import TextField, { Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';

import logo from '../../assets/logo.svg';

import { Container, Logo, Search, Wrapper, Map } from './styles';

export function Home() {
  const [inputValue, setInputValue] = useState('');

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
        </Search>
      </Container>
      <Map />
    </Wrapper>
  );
}

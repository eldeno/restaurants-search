import React, { useState } from 'react';
import TextField, { Input } from '@material/react-text-field';

import logo from '../../assets/logo.svg';

import { Container, Search } from './styles';

export function Home() {
  const [inputValue, setInputValue] = useState('');

  return (
    <Container>
      <Search>
        <img src={logo} alt="Logotipo" />
        <TextField label="Search" outlined>
          <Input
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value);
            }}
          />
        </TextField>
      </Search>
    </Container>
  );
}

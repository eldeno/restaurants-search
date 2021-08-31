import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { Reset } from 'styled-reset';

import store from './redux/store';

import theme from './theme';

import { Home } from './pages/Home';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Reset />
          <Home />
        </ThemeProvider>
      </Provider>
    </div>
  );
}

export default App;

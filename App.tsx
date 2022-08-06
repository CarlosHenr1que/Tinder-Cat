import React from 'react';

import {ThemeProvider} from 'styled-components';
import theme from './src/styles/themes/default';

import Routes from './src/routes';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  );
};

export default App;

import React from 'react';

import {ThemeProvider} from 'styled-components';
import theme from './src/styles/themes/default';

import Cats from './src/screens/Cats';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Cats />
    </ThemeProvider>
  );
};

export default App;

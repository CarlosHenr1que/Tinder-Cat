import React from 'react';

import {ThemeProvider} from 'styled-components/native';
import theme from '../../src/styles/themes/default';

import {render} from '@testing-library/react-native';

import {Spacing} from '../../src/components';

const makeSut = () => {
  return (
    <ThemeProvider theme={theme}>
      <Spacing />
    </ThemeProvider>
  );
};

describe('Spacing', () => {
  it('should be rendered correctly', () => {
    const {getByTestId} = render(makeSut());

    const component = getByTestId('spacing');

    expect(component).toBeDefined();
  });
});

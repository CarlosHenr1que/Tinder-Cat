import React from 'react';
import {ThemeProvider} from 'styled-components/native';
import theme from '../../src/styles/themes/default';

import {render} from '@testing-library/react-native';

import {CardImage} from '../../src/components';

describe('CardImage', () => {
  it('should render component with correct props', () => {
    const title = 'any_title';
    const description = 'any_description';
    const image = 'any_uri';
    const position = 'any_position';

    const {getByText, getByTestId} = render(
      <ThemeProvider theme={theme}>
        <CardImage
          title={title}
          description={description}
          imageUri={image}
          position={position}
        />
        ,
      </ThemeProvider>,
    );

    expect(getByText(title)).toBeDefined();
    expect(getByText(description)).toBeDefined();
    expect(getByText(position)).toBeDefined();
    expect(getByTestId('card_image_image').props).toHaveProperty('source', {
      uri: image,
    });
  });
});

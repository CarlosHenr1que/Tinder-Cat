import React from 'react';

import {fireEvent, render} from '@testing-library/react-native';
import RoundButton from '../../src/components/RoundButton';

import {ThemeProvider} from 'styled-components/native';
import theme from '../../src/styles/themes/default';
import {ImageSourcePropType} from 'react-native';

const makeSut = () => {
  const onPressMock = jest.fn();
  const image: ImageSourcePropType = {
    uri: 'any_uri',
  };

  const sut = (
    <ThemeProvider theme={theme}>
      <RoundButton onPress={onPressMock} icon={image} />,
    </ThemeProvider>
  );

  return {
    sut,
    onPressMock,
    image,
  };
};

describe('RoundButton', () => {
  it('should render component correctly', () => {
    const {image, sut} = makeSut();
    const {getByTestId} = render(sut);

    expect(getByTestId('round_button_icon').props).toHaveProperty(
      'source',
      image,
    );
  });

  it('should call onPress when button is pressed', () => {
    const {sut, onPressMock} = makeSut();
    const {getByTestId} = render(sut);

    const component = getByTestId('round_button');
    fireEvent.press(component);

    expect(onPressMock).toHaveBeenCalledTimes(1);
  });
});

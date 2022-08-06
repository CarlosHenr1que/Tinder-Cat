import React from 'react';
import {ImageSourcePropType} from 'react-native';

import {Container, Icon} from './styles';

interface Props {
  icon: ImageSourcePropType;
  onPress: () => void;
}

const RoundButton: React.FC<Props> = ({icon, onPress}) => {
  return (
    <Container testID="round_button" onPress={onPress}>
      <Icon source={icon} testID="round_button_icon" />
    </Container>
  );
};

export default RoundButton;

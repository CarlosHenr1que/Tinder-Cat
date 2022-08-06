import React from 'react';

import {Container} from './styles';

interface Props {
  mutiplier?: number;
  horizontal?: boolean;
}

const Spacing: React.FC<Props> = ({horizontal = false, mutiplier = 1}) => {
  return (
    <Container horizontal={horizontal} mutiplier={mutiplier} testID="spacing" />
  );
};

export default Spacing;

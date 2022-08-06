import React from 'react';

import {
  Description,
  Container,
  Image,
  InfoCard,
  Information,
  Title,
  Position,
} from './styles';

interface Props {
  title: string;
  description: string;
  position: string;
  imageUri: string;
}

const CardImage: React.FC<Props> = ({
  title,
  description,
  position,
  imageUri,
}) => {
  return (
    <Container>
      <Image
        resizeMode="cover"
        testID="card_image_image"
        source={{
          uri: imageUri,
        }}
      />
      <InfoCard>
        <Information>
          <Title>{title}</Title>
          <Position>{position}</Position>
        </Information>
        <Description>{description}</Description>
      </InfoCard>
    </Container>
  );
};

export default CardImage;

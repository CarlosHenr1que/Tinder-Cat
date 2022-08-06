import React from 'react';
import {SwiperDeck} from '../../components';

import {Breed} from '../../models';
import {Container} from './styles';

const Cats: React.FC = () => {
  const breeds: Breed[] = [
    {
      id: 'abys',
      name: 'Abyssinian',
      origin: 'Egypt',
      image: {
        id: 'abysimage',
        url: 'https://cdn2.thecatapi.com/images/0XYvRd7oD.jpg',
      },
    },
  ];
  return (
    <Container>
      <SwiperDeck
        data={breeds}
        onSwiped={() => {}}
        onLeftSwipe={() => {}}
        onRightSwipe={() => {}}
      />
    </Container>
  );
};

export default Cats;

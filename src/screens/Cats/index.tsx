import React, {useEffect, useState} from 'react';
import {SwiperDeck} from '../../components';

import {Breed} from '../../models';
import {requestGetBreedList} from '../../services/breed';
import {Container} from './styles';

const Cats: React.FC = () => {
  const [breeds, setBreeds] = useState<Breed[]>([]);

  useEffect(() => {
    (async () => {
      const response = await requestGetBreedList({page: 0, limit: 10});
      if (response) {
        setBreeds(response);
      }
    })();
  }, []);

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

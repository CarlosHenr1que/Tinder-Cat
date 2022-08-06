/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {SwiperDeck} from '../../components';

import {usePagination} from '../../hooks/usePagination';

import {Breed} from '../../models';
import {requestGetBreedList} from '../../services/breed';
import {requestSendVote} from '../../services/vote';
import {Container} from './styles';

const LIMIT = 10;
const MINIMUM_SIZE = 1;
const userID = 'CarlosHen1que';

const Cats: React.FC = () => {
  const [breeds, setBreeds] = useState<Breed[]>([]);
  const {page, nextPage, getLastStoredPagination, saveLastItemID} =
    usePagination({
      pageKey: 'tinderCat@breedsLastPage',
      lastItemKey: 'tinderCat@breedsLastBreedId',
    });

  const handleLeftSwipe = (item: Breed) => {
    requestSendVote({
      image_id: item.image.id,
      sub_id: userID,
      value: 0,
    });
  };

  const handleRightSwipe = (item: Breed) => {
    requestSendVote({
      image_id: item.image.id,
      sub_id: userID,
      value: 1,
    });
  };

  const handleCardSwipe = (currentSize: number, swipedID: string) => {
    saveLastItemID(swipedID);
    if (currentSize === MINIMUM_SIZE) {
      handleRequestBreeds(page + 1);
      nextPage();
    }
  };

  const handleRequestBreeds = async (currentPage: number) => {
    const data = await requestGetBreedList({page: currentPage, limit: LIMIT});
    if (data) {
      setBreeds(previousState => {
        if (previousState.length === 0) {
          return data;
        }
        return [previousState[previousState.length - 1], ...data];
      });
    }
  };

  const handleRequestRecoverBreed = async (
    currentPage: number,
    lastBreedID: string | null,
  ) => {
    const data = await requestGetBreedList({page: currentPage, limit: LIMIT});

    if (data) {
      const lastBreedIndex = data.findIndex(item => item.id === lastBreedID);
      setBreeds(data.slice(lastBreedIndex + 1));
    }
  };

  useEffect(() => {
    (async () => {
      const {lastItemID, lastPage} = await getLastStoredPagination();
      if (lastItemID || lastPage) {
        handleRequestRecoverBreed(Number(lastPage), lastItemID);
      } else {
        handleRequestBreeds(page);
      }
    })();
  }, []);

  return (
    <Container>
      <SwiperDeck
        data={breeds}
        onSwiped={handleCardSwipe}
        onLeftSwipe={handleLeftSwipe}
        onRightSwipe={handleRightSwipe}
      />
    </Container>
  );
};

export default Cats;

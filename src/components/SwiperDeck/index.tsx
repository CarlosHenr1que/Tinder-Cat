import React, {useCallback, useEffect, useRef, useState} from 'react';
import {Animated, PanResponder, StyleSheet, View} from 'react-native';

import RoundButton from '../RoundButton';
import Card from './Card';
import Spacing from '../Spacing';

import {CARD} from './utils';

import close_icon from '../../assets/icons/close_icon.png';
import heart_icon from '../../assets/icons/heart_icon.png';

import {Breed} from '../../models';
import CardImage from '../CardImage';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FBFAFF',
    alignItems: 'center',
    height: 558,
  },
  buttonsContainer: {
    flexDirection: 'row',
    position: 'absolute',
    zIndex: -1,
    bottom: 0,
  },
});

interface Props {
  data: Breed[];
  onSwiped: (currentSize: number, swipedItemId: string) => void;
  onLeftSwipe: (item: Breed) => void;
  onRightSwipe: (item: Breed) => void;
}

const SwiperDeck: React.FC<Props> = ({
  data,
  onSwiped,
  onLeftSwipe,
  onRightSwipe,
}) => {
  const [pets, setPets] = useState<Breed[]>(data);

  useEffect(() => {
    setPets(data);
  }, [data]);

  const swipe = useRef(new Animated.ValueXY()).current;
  const tiltSign = useRef(new Animated.Value(1)).current;

  const handleChoiceCallback = useCallback(
    (direction: number, item: Breed) => {
      if (direction === 1) {
        onRightSwipe(item);
      } else {
        onLeftSwipe(item);
      }
    },
    [onLeftSwipe, onRightSwipe],
  );

  const removeTopCard = useCallback(
    (direction: number) => {
      setPets(prevState => {
        const swipedItem = prevState[0];
        onSwiped(prevState.length - 1, swipedItem.id);
        handleChoiceCallback(direction, swipedItem);
        return prevState.slice(1);
      });
      swipe.setValue({x: 0, y: 0});
    },
    [handleChoiceCallback, onSwiped, swipe],
  );

  const handleChoice = useCallback(
    (direction: number) => {
      Animated.timing(swipe.x, {
        toValue: direction * CARD.OUT_OF_SCREEN,
        duration: 400,
        useNativeDriver: true,
      }).start(() => removeTopCard(direction));
    },
    [removeTopCard, swipe.x],
  );

  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: (_, {dx, dy, y0}) => {
      swipe.setValue({x: dx, y: dy});
      tiltSign.setValue(y0 > CARD.HEIGHT / 2 ? 1 : -1);
    },
    onPanResponderRelease: (_, {dx, dy}) => {
      const direction = Math.sign(dx);
      const isActionActive = Math.abs(dx) > 100;

      if (isActionActive) {
        Animated.timing(swipe, {
          duration: 200,
          toValue: {
            x: direction * CARD.OUT_OF_SCREEN,
            y: dy,
          },
          useNativeDriver: true,
        }).start(() => removeTopCard(direction));
      } else {
        Animated.spring(swipe, {
          toValue: {
            x: 0,
            y: 0,
          },
          useNativeDriver: true,
          friction: 5,
        }).start();
      }
    },
  });

  const getImage = (breed: Breed) => {
    if (!breed.image?.url) {
      return CARD.PLACE_HOLDER;
    }

    return breed.image.url;
  };

  useEffect(() => {
    setPets(data);
  }, [data]);

  return (
    <View style={styles.container}>
      {pets
        .map((card, index) => {
          const isFirst = index === 0;

          const dragHandlers = isFirst ? panResponder.panHandlers : {};

          return (
            <Card
              key={index}
              isFirst={isFirst}
              swipe={swipe}
              tiltSign={tiltSign}
              {...dragHandlers}>
              <CardImage
                title={card.name}
                imageUri={getImage(card)}
                description={card.origin}
                position={card.affection_level.toString()}
              />
            </Card>
          );
        })
        .reverse()}
      <View style={styles.buttonsContainer}>
        <RoundButton icon={close_icon} onPress={() => handleChoice(-1)} />
        <Spacing horizontal mutiplier={5} />
        <RoundButton icon={heart_icon} onPress={() => handleChoice(1)} />
      </View>
    </View>
  );
};

export default SwiperDeck;

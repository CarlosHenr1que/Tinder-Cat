import React from 'react';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';

import MessageCirle from '../../assets/icons/message_circle.svg';
import Cat from '../../assets/icons/cat.svg';
import User from '../../assets/icons/user.svg';

import {Container, TouchButton} from './styles';

const activeColor = '#EC537E';
const inactiveColor = '#434141';

const screns = [
  {
    name: 'Cats',
    icon: Cat,
  },
  {
    name: 'Chat',
    icon: MessageCirle,
  },
  {
    name: 'User',
    icon: User,
  },
];

const TabBar: React.FC<BottomTabBarProps> = ({state, navigation}) => {
  const selectFillColor = (index: number) =>
    index === state.index ? activeColor : inactiveColor;

  return (
    <Container>
      {screns.map((Item, index) => (
        <TouchButton
          key={index.toString()}
          onPress={() => navigation.navigate(Item.name)}>
          <Item.icon width={22} height={22} fill={selectFillColor(index)} />
        </TouchButton>
      ))}
    </Container>
  );
};

export default TabBar;

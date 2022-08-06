import React from 'react';

import {NavigationContainer} from '@react-navigation/native';

import Cats from '../screens/Cats';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {TabBar} from '../components';
import FakeScreen from '../screens/FakeScreen';

export type RootStackParamList = {
  Cats: undefined;
  Chat: undefined;
  User: undefined;
};

const Tab = createBottomTabNavigator<RootStackParamList>();

const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBar={props => <TabBar {...props} />}
        screenOptions={{headerShown: false}}>
        <Tab.Screen name="Cats" component={Cats} />
        <Tab.Screen name="Chat" component={FakeScreen} />
        <Tab.Screen name="User" component={FakeScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Routes;

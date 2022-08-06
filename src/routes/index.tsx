import React from 'react';

import {NavigationContainer} from '@react-navigation/native';

import Cats from '../screens/Cats';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

export type RootStackParamList = {
  Cats: undefined;
};

const Tab = createBottomTabNavigator<RootStackParamList>();

const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{headerShown: false}}>
        <Tab.Screen name="Cats" component={Cats} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Routes;

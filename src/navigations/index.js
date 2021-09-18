import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {View, Text, StatusBar, SafeAreaView} from 'react-native';
import AuthNavigator from './AuthNavigator';
import DrawerNavigator from './DrawerNavigator';
import HomeNavigator from './HomeNavigator';

export default function AppContainer() {
  return (
    <NavigationContainer>
      {/* <AuthNavigator /> */}

      {/* <HomeNavigator /> */}

      <DrawerNavigator />
    </NavigationContainer>
  );
}

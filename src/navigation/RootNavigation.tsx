import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {RootStackParamList} from '../types/navigation';
import {ForgotPassword, Login} from '../screens';
import HomeNavigation from './HomeNavigation';

const RootStack = createStackNavigator<RootStackParamList>();

function RootNavigation() {
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="Login">
        <RootStack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />
        <RootStack.Screen name="ForgotPassword" component={ForgotPassword} />
        <RootStack.Screen
          name="Home"
          component={HomeNavigation}
          options={{
            headerShown: false,
          }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

export default RootNavigation;

import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import {HomeBottomTabParamList} from '../types/navigation';
import {About} from '../screens';
import {TAB_ACTIVE_COLOR, TAB_INACTIVE_COLOR} from '../colors';
import ProductNavigation from './ProductNavigation';

const Tab = createMaterialBottomTabNavigator<HomeBottomTabParamList>();

function HomeNavigation() {
  return (
    <Tab.Navigator
      initialRouteName="Product"
      shifting={true}
      activeColor={TAB_ACTIVE_COLOR}
      inactiveColor={TAB_INACTIVE_COLOR}>
      <Tab.Screen
        name="Product"
        component={ProductNavigation}
        options={{
          tabBarIcon: ({focused, color}) => (
            <MaterialCommunityIcon
              name={focused ? 'shopping' : 'shopping-outline'}
              size={30}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="About"
        component={About}
        options={{
          tabBarIcon: ({focused, color}) => (
            <MaterialCommunityIcon
              name={focused ? 'information' : 'information-outline'}
              size={30}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default HomeNavigation;

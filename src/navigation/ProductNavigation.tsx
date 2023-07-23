import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {ProductStackParamList} from '../types/navigation';
import {Product, ProductDetail} from '../screens';

const Stack = createStackNavigator<ProductStackParamList>();

function ProductNavigation() {
  return (
    <Stack.Navigator
      initialRouteName="ProductHome"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="ProductHome" component={Product} />
      <Stack.Screen name="ProductDetail" component={ProductDetail} />
    </Stack.Navigator>
  );
}

export default ProductNavigation;

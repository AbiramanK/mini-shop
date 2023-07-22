import {createStackNavigator} from '@react-navigation/stack';

import {RootStackParamList} from '../types/navigation';
import {ForgotPassword, Login} from '../screens';
import {NavigationContainer} from '@react-navigation/native';

const RootStack = createStackNavigator<RootStackParamList>();

function RootNavigation() {
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="Login">
        <RootStack.Screen name="Login" component={Login} />
        <RootStack.Screen name="ForgotPassword" component={ForgotPassword} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

export default RootNavigation;

import {StackScreenProps} from '@react-navigation/stack';
import {Button, Text, View} from 'react-native';
import {RootStackParamList} from '../types/navigation';

export interface LoginProps
  extends StackScreenProps<RootStackParamList, 'Login'> {}

function Login(props: LoginProps) {
  return (
    <View>
      <Text>Login</Text>
      <Button
        title="Forgot Password"
        onPress={() => props?.navigation?.navigate('ForgotPassword')}
      />
    </View>
  );
}

export default Login;

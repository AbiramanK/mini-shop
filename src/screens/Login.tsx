import React, {useState} from 'react';
import {StyleSheet, Image} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';

import {RootStackParamList} from '../types/navigation';
import {
  TextInput,
  Button,
  Text,
  Container,
  Content,
  Footer,
} from '../components';
import {REACT_NATIVE_APP_LOGIN_LOGO_IMAGE_URL} from '../../constants';

export interface LoginProps
  extends StackScreenProps<RootStackParamList, 'Login'> {}

function Login(props: LoginProps) {
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();

  function onChangeEmail(value: string) {
    setEmail(value);
  }

  function onChangePassword(value: string) {
    setPassword(value);
  }

  function onPressForgotPassword() {
    props?.navigation?.navigate('ForgotPassword');
  }

  function onPressLogin() {}

  return (
    <Container style={styles?.container}>
      <Content contentContainerStyle={styles?.contentContainerStyle}>
        <Text variant="title">Login to Mini Shop</Text>
        <Container style={styles?.logoContainer}>
          <Image
            source={{
              uri: REACT_NATIVE_APP_LOGIN_LOGO_IMAGE_URL,
            }}
            style={styles?.logo}
          />
        </Container>
        <Container style={styles?.inputsContainer}>
          <TextInput
            value={email}
            onChangeText={onChangeEmail}
            keyboardType="email-address"
            placeholder="Email"
            label="Email"
          />
          <TextInput
            value={password}
            onChangeText={onChangePassword}
            placeholder="Password"
            label="Password"
            secureTextEntry
          />
        </Container>
        <Button
          variant="link"
          onPress={onPressForgotPassword}
          autoCapitalization={false}>
          Forgot Password?
        </Button>
        <Button onPress={onPressLogin} autoCapitalization={false}>
          Login
        </Button>
        <Footer containerStyle={styles?.footerContainer} />
      </Content>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {},
  contentContainerStyle: {
    justifyContent: 'center',
    rowGap: 20,
    paddingVertical: 50,
    paddingHorizontal: 15,
  },
  inputsContainer: {
    rowGap: 15,
  },
  logoContainer: {
    alignItems: 'center',
    paddingVertical: 10,
  },
  logo: {
    width: 180,
    height: 180,
    borderRadius: 100,
  },
  footerContainer: {
    paddingVertical: 20,
  },
});

export default Login;

import React, {useState} from 'react';
import {StyleSheet, Image} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';

import {RootStackParamList} from '../types/navigation';
import {
  TextInput,
  Button,
  Container,
  Content,
  Footer,
  Header,
} from '../components';
import {REACT_NATIVE_APP_LOGIN_LOGO_IMAGE_URL} from '../constants';

export interface ForgotPasswordProps
  extends StackScreenProps<RootStackParamList, 'ForgotPassword'> {}

function ForgotPassword(props: ForgotPasswordProps) {
  const [email, setEmail] = useState<string>();

  function onChangeEmail(value: string) {
    setEmail(value);
  }

  function onPressLogin() {
    onPressGoBack();
  }

  function onPressSubmit() {
    onPressGoBack();
  }

  function onPressGoBack() {
    props?.navigation?.goBack();
  }

  return (
    <Container style={styles?.container}>
      <Header showGoBack onPressGoBack={onPressGoBack}>
        Reset Password
      </Header>
      <Content contentContainerStyle={styles?.contentContainerStyle}>
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
        </Container>
        <Button onPress={onPressSubmit} autoCapitalization={false}>
          Submit
        </Button>
        <Button
          variant="link"
          onPress={onPressLogin}
          autoCapitalization={false}>
          Login?
        </Button>
        <Footer containerStyle={styles?.footerContainer} />
      </Content>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
  },
  contentContainerStyle: {
    justifyContent: 'center',
    rowGap: 20,
    paddingVertical: 50,
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

export default ForgotPassword;

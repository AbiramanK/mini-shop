import React from 'react';
import {StyleSheet, Image} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {useFormik} from 'formik';

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
import {ForgotPasswordFormValidationSchema} from '../ValidationSchema';
import {showToast} from '../utilities';

export interface ForgotPasswordFormInterface {
  email: string;
}

export interface ForgotPasswordProps
  extends StackScreenProps<RootStackParamList, 'ForgotPassword'> {}

function ForgotPassword(props: ForgotPasswordProps) {
  function onPressLogin() {
    onPressGoBack();
  }

  function onPressSubmit(_: ForgotPasswordFormInterface) {
    showToast({
      type: 'success',
      text1: 'Reset Pasword',
      text2: 'Reset password link sent',
    });
    onPressGoBack();
  }

  function onPressGoBack() {
    props?.navigation?.goBack();
  }

  const {handleChange, handleBlur, handleSubmit, values, errors, touched} =
    useFormik({
      initialValues: {email: ''},
      validationSchema: ForgotPasswordFormValidationSchema,
      onSubmit(form) {
        onPressSubmit(form);
      },
    });

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
            id="email"
            value={values?.email}
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            keyboardType="email-address"
            placeholder="Email"
            label="Email"
            errorMessage={
              errors?.email && touched?.email ? errors?.email : undefined
            }
          />
        </Container>
        <Button onPress={handleSubmit as any} autoCapitalization={false}>
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

import React from 'react';
import {StyleSheet, Image} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {CommonActions} from '@react-navigation/native';
import {useFormik} from 'formik';

import {RootStackParamList} from '../types/navigation';
import {
  TextInput,
  Button,
  Text,
  Container,
  Content,
  Footer,
} from '../components';
import {REACT_NATIVE_APP_LOGIN_LOGO_IMAGE_URL} from '../constants';
import {LoginFormValidationSchema} from '../ValidationSchema';
import {showToast} from '../utilities';

export interface LoginFormInterface {
  email: string;
  password: string;
}

export interface LoginProps
  extends StackScreenProps<RootStackParamList, 'Login'> {}

function Login(props: LoginProps) {
  function onPressForgotPassword() {
    props?.navigation?.navigate('ForgotPassword');
  }

  function login(form: LoginFormInterface) {
    if (form?.email === 'admin@minishop.com' && form?.password === '12345678') {
      loginSuccess();
    } else {
      showToast({
        type: 'error',
        text1: 'Login Failed',
        text2: 'Email / Password incorrect',
      });
    }
  }

  function loginSuccess() {
    props?.navigation?.dispatch(
      CommonActions?.reset({
        index: 0,
        routes: [{name: 'Home'}],
      }),
    );
  }

  const {handleChange, handleBlur, handleSubmit, values, errors, touched} =
    useFormik({
      initialValues: {email: '', password: ''},
      validationSchema: LoginFormValidationSchema,
      onSubmit: form => {
        login(form);
      },
    });

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
          <TextInput
            id="password"
            value={values?.password}
            onChangeText={handleChange('password')}
            onBlur={handleBlur('password')}
            placeholder="Password"
            label="Password"
            secureTextEntry
            errorMessage={
              errors?.password && touched?.password
                ? errors?.password
                : undefined
            }
          />
        </Container>
        <Button
          variant="link"
          onPress={onPressForgotPassword}
          autoCapitalization={false}>
          Forgot Password?
        </Button>
        <Button onPress={handleSubmit as any} autoCapitalization={false}>
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
  formikContainer: {
    rowGap: 20,
  },
});

export default Login;

import React from 'react';
import {StyleProp, StyleSheet, TextStyle, ViewStyle} from 'react-native';

import Container from './Container';
import Text from './Text';
import {REACT_NATIVE_APP_COPYRIGHT_MESSAGE} from '../../constants';

export interface FooterProps {
  containerStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
}

function Footer(props: FooterProps) {
  return (
    <Container style={[styles?.container, props?.containerStyle]}>
      <Text style={[props?.textStyle]}>
        {REACT_NATIVE_APP_COPYRIGHT_MESSAGE}
      </Text>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
});

export default Footer;

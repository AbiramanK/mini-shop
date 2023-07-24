import React, {PropsWithChildren} from 'react';
import {
  Text as RNText,
  StyleProp,
  StyleSheet,
  TextStyle,
  Appearance,
} from 'react-native';

import {TextVariantOptions} from '../types/components/Text';
import {DARK, HELPER_TEXT_DARK, HELPER_TEXT_LIGHT, LIGHT} from '../colors';

const theme = Appearance?.getColorScheme();

export interface TextProps {
  style?: StyleProp<TextStyle>;
  variant?: TextVariantOptions;
}

function Text(props: PropsWithChildren<TextProps>) {
  return (
    <RNText
      style={[
        styles?.defaultColor,
        styles?.[`${props?.variant! ?? 'text'}`],
        props?.style,
      ]}>
      {props?.children}
    </RNText>
  );
}

const styles = StyleSheet.create({
  defaultColor: {
    color: theme === 'dark' ? LIGHT : DARK,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 26,
    fontWeight: 'bold',
  },
  label: {
    fontSize: 18,
    fontWeight: 'normal',
  },
  text: {
    fontSize: 20,
  },
  button: {
    fontSize: 18,
  },
  helper: {
    fontSize: 18,
    color: theme === 'dark' ? HELPER_TEXT_DARK : HELPER_TEXT_LIGHT,
    fontWeight: 'normal',
  },
  paragraph: {
    fontSize: 20,
    marginVertical: 4,
  },
  error: {
    fontSize: 16,
    color: '#FF9494',
    fontWeight: 'normal',
  },
});

export default Text;

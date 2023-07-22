import React, {PropsWithChildren} from 'react';
import {
  Text as RNText,
  StyleProp,
  StyleSheet,
  TextStyle,
  Appearance,
} from 'react-native';

import {TextVariantOptions} from '../types/components/Text';

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
    color: theme === 'dark' ? '#FFFFFF' : '#000000',
  },
  title: {
    fontSize: 32,
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
    color: theme === 'dark' ? '#90EE90' : '#00FF00',
    fontWeight: 'normal',
  },
});

export default Text;

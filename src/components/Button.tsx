import React, {PropsWithChildren} from 'react';
import {
  GestureResponderEvent,
  StyleSheet,
  TouchableOpacity,
  Appearance,
  StyleProp,
  TextStyle,
  ViewStyle,
} from 'react-native';

import Text from './Text';
import {ButtonVariantOptions} from '../types/components/Button';

const theme = Appearance?.getColorScheme();

export interface ButtonProps {
  onPress?: (event?: GestureResponderEvent) => void;
  autoCapitalization?: boolean;
  containerStyle?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<TextStyle>;
  variant?: ButtonVariantOptions;
}

function Button(props: PropsWithChildren<ButtonProps>) {
  const title =
    (props?.autoCapitalization === undefined ||
      props?.autoCapitalization === true) &&
    typeof props?.children === 'string'
      ? props?.children?.toUpperCase()
      : props?.children;

  const variant = props?.variant === 'link' ? 'helper' : props?.variant;

  return (
    <TouchableOpacity
      style={[
        props?.variant === 'link' ? styles?.link : styles?.contianer,
        props?.containerStyle,
      ]}
      onPress={props?.onPress}>
      <Text
        variant={variant}
        style={[
          props?.variant === 'button' || props?.variant === undefined
            ? styles?.title
            : styles?.linkTitle,
          props?.titleStyle,
        ]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  contianer: {
    paddingVertical: 12,
    borderRadius: 8,
    backgroundColor: theme === 'dark' ? '#FFFFFF' : '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: theme === 'dark' ? '#000000' : '#FFFFFF',
    fontWeight: 'bold',
  },
  link: {},
  linkTitle: {},
});

export default Button;

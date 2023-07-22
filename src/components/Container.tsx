import React, {PropsWithChildren} from 'react';
import {View, Appearance, StyleSheet, StyleProp, ViewStyle} from 'react-native';

const theme = Appearance?.getColorScheme();

export interface ContianerProps {
  style?: StyleProp<ViewStyle>;
}

function Container(props: PropsWithChildren<ContianerProps>) {
  return (
    <View style={[styles?.container, props?.style]}>{props?.children}</View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme === 'dark' ? '#000000' : '#FFFFFF',
  },
});

export default Container;

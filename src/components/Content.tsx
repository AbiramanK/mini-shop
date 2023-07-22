import React, {PropsWithChildren} from 'react';
import {StyleProp, ViewStyle, StyleSheet, ScrollView} from 'react-native';

export interface ContentProps {
  style?: StyleProp<ViewStyle>;
  contentContainerStyle?: StyleProp<ViewStyle>;
}

function Content(props: PropsWithChildren<ContentProps>) {
  return (
    <ScrollView
      style={[styles?.container, props?.style]}
      contentContainerStyle={[
        styles?.contentContainerStyle,
        props?.contentContainerStyle,
      ]}>
      {props?.children}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {},
  contentContainerStyle: {},
});

export default Content;

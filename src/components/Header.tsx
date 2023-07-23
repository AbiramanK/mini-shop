import React, {PropsWithChildren} from 'react';
import {
  StyleProp,
  StyleSheet,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
  Appearance,
} from 'react-native';
import Ionicon from 'react-native-vector-icons/Ionicons';

import Text from './Text';
import Container from './Container';
import {WHITE} from '../colors';

const theme = Appearance?.getColorScheme();

export interface HeaderProps {
  style?: StyleProp<TextStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  showGoBack?: boolean;
  onPressGoBack?: Function;
}

function Header(props: PropsWithChildren<HeaderProps>) {
  function onPress() {
    if (props?.onPressGoBack!) {
      props?.onPressGoBack();
    }
  }

  return (
    <Container style={[styles?.container, props?.containerStyle]}>
      {(props?.showGoBack || props?.onPressGoBack!) && (
        <TouchableOpacity style={styles?.iconContainer} onPress={onPress}>
          <Ionicon name="arrow-back-outline" size={25} color={WHITE} />
        </TouchableOpacity>
      )}
      <Text variant="title" style={props?.style}>
        {props?.children}
      </Text>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 15,
    flex: 0,
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 25,
  },
  iconContainer: {
    backgroundColor:
      theme === 'dark' ? 'rgba(255, 255, 255, 0.3)' : 'rgba(0, 0, 0, 0.3)',
    padding: 8,
    borderRadius: 100,
  },
});

export default Header;

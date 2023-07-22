import React, {useState} from 'react';
import {
  KeyboardTypeOptions,
  TextInput as RNTextInput,
  StyleProp,
  StyleSheet,
  TextStyle,
  Appearance,
  TouchableOpacity,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Text from './Text';
import Container from './Container';

const theme = Appearance?.getColorScheme();

export interface TextInputProps {
  style?: StyleProp<TextStyle>;
  onChangeText?: (text: string) => void;
  value?: string;
  placeholder?: string;
  keyboardType?: KeyboardTypeOptions;
  editable?: boolean;
  multiline?: boolean;
  numberOfLines?: number;
  maxLength?: number;
  label?: string;
  secureTextEntry?: boolean;
}

function TextInput(props: TextInputProps) {
  const [secure, setSecure] = useState<boolean>(
    props?.secureTextEntry ?? false,
  );

  function onPressSecureIcon() {
    setSecure(value => !value);
  }

  return (
    <Container style={styles?.container}>
      {props?.label && <Text variant="label">{props?.label}</Text>}
      <RNTextInput
        style={[styles?.textInputStyle, props?.style]}
        onChangeText={props?.onChangeText}
        value={props?.value}
        placeholder={props?.placeholder}
        keyboardType={props?.keyboardType}
        editable={props?.editable}
        multiline={props?.multiline}
        numberOfLines={props?.numberOfLines}
        maxLength={props?.maxLength}
        secureTextEntry={secure}
      />
      {props?.secureTextEntry! && (
        <Container style={styles.secureContainer}>
          {!secure && (
            <TouchableOpacity onPress={onPressSecureIcon}>
              <Ionicons name="eye-off-outline" size={28} />
            </TouchableOpacity>
          )}
          {secure && (
            <TouchableOpacity onPress={onPressSecureIcon}>
              <Ionicons name="eye-outline" size={28} />
            </TouchableOpacity>
          )}
        </Container>
      )}
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    rowGap: 10,
  },
  textInputStyle: {
    borderStyle: 'solid',
    borderWidth: 0.8,
    borderRadius: 5,
    borderColor: theme === 'dark' ? '#FFFFFF' : '#000000',
  },
  secureContainer: {
    position: 'absolute',
    bottom: 20,
    right: 10,
  },
});

export default TextInput;

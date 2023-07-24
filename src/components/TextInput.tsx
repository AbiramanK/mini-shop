import React, {useState} from 'react';
import {
  KeyboardTypeOptions,
  TextInput as RNTextInput,
  StyleProp,
  StyleSheet,
  TextStyle,
  Appearance,
  TouchableOpacity,
  NativeSyntheticEvent,
  TextInputFocusEventData,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Text from './Text';
import Container from './Container';
import {DARK, LIGHT} from '../colors';

const theme = Appearance?.getColorScheme();

export interface TextInputProps {
  id?: string;
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
  onBlur?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
  errorMessage?: string;
}

function TextInput(props: TextInputProps) {
  const [secure, setSecure] = useState<boolean>(
    props?.secureTextEntry ?? false,
  );

  function onPressSecureIcon() {
    setSecure(value => !value);
  }

  function onChangeText(text: string) {
    if (props?.onChangeText!) {
      props?.onChangeText(text);
    }
  }

  function onBlur(e: NativeSyntheticEvent<TextInputFocusEventData>) {
    if (props?.onBlur!) {
      props?.onBlur(e);
    }
  }

  return (
    <Container style={styles?.container}>
      {props?.label && <Text variant="label">{props?.label}</Text>}
      <Container style={styles?.inputContainer}>
        <RNTextInput
          id={props?.id}
          style={[styles?.textInputStyle, props?.style]}
          onChangeText={onChangeText}
          value={props?.value}
          placeholder={props?.placeholder}
          keyboardType={props?.keyboardType}
          editable={props?.editable}
          multiline={props?.multiline}
          numberOfLines={props?.numberOfLines}
          maxLength={props?.maxLength}
          secureTextEntry={secure}
          onBlur={onBlur}
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
      {props?.errorMessage && (
        <Text variant="error">{props?.errorMessage}</Text>
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
    borderColor: theme === 'dark' ? LIGHT : DARK,
  },
  secureContainer: {
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
  inputContainer: {
    position: 'relative',
  },
});

export default TextInput;

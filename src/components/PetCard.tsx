import React from 'react';
import {ImageStyle, StyleProp, StyleSheet, ViewStyle} from 'react-native';
import {Card} from 'react-native-paper';
import {ThemeProp} from 'react-native-paper/lib/typescript/src/types';

export interface PetCardProps {
  url: string;
  cardStyle?: StyleProp<ViewStyle>;
  coverPicStyle?: StyleProp<ImageStyle>;
  onPress?: (pet: string) => void;
  cardTheme?: ThemeProp;
  cardCoverTheme?: ThemeProp;
}

function PetCard(props: PetCardProps) {
  function onPress() {
    if (props?.onPress!) {
      props?.onPress(props?.url);
    }
  }

  return (
    <Card
      style={[styles?.card, props?.cardStyle]}
      onPress={onPress}
      theme={props?.cardTheme}>
      <Card.Cover
        source={{uri: props?.url}}
        style={props?.coverPicStyle}
        theme={props?.cardCoverTheme}
      />
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '100%',
  },
});

export default PetCard;

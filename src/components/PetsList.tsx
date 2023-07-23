import React from 'react';
import {
  FlatList,
  ListRenderItem,
  StyleProp,
  StyleSheet,
  ViewStyle,
} from 'react-native';

export interface PetsListProps {
  data: Array<string>;
  renderItem: ListRenderItem<string>;
  keyExtractor: (item: string) => string;
  key: React.Key;
  contentContainerStyle?: StyleProp<ViewStyle>;
  columnWrapperStyle?: StyleProp<ViewStyle>;
}

function PetsList(props: PetsListProps) {
  return (
    <FlatList
      key={'#'}
      data={props?.data}
      renderItem={props?.renderItem}
      keyExtractor={props?.keyExtractor}
      numColumns={2}
      contentContainerStyle={[
        styles?.contentContainerStyle,
        props?.contentContainerStyle,
      ]}
      columnWrapperStyle={styles?.columnWrapperStyle}
    />
  );
}

const styles = StyleSheet.create({
  contentContainerStyle: {
    rowGap: 10,
  },
  columnWrapperStyle: {justifyContent: 'space-between'},
});

export default PetsList;

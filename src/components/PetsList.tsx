import React from 'react';
import {
  FlatList,
  ListRenderItem,
  RefreshControl,
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
  onEndReachedThreshold?: number;
  onEndReached?: (info: {distanceFromEnd: number}) => void;
  refreshing?: boolean;
  onRefresh?: Function;
}

function PetsList(props: PetsListProps) {
  function onEndReached(info: {distanceFromEnd: number}) {
    if (props?.onEndReached!) {
      props?.onEndReached(info);
    }
  }

  function onRefresh() {
    if (props?.onRefresh!) {
      props?.onRefresh();
    }
  }

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
      onEndReachedThreshold={props?.onEndReachedThreshold}
      onEndReached={onEndReached}
      refreshControl={
        <RefreshControl refreshing={props?.refreshing!} onRefresh={onRefresh} />
      }
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

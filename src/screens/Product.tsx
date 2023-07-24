import React, {useEffect, useState} from 'react';
import {StyleSheet} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';

import {Container, Header, PetCard, PetsList} from '../components';
import {getPets} from '../api';
import {ProductStackParamList} from '../types/navigation';
import {DEFAULT_PAGINATION_CURSOR} from '../constants';

export interface ProductProps
  extends StackScreenProps<ProductStackParamList, 'ProductHome'> {}

function Product(props: ProductProps) {
  const [pets, setPets] = useState<Array<string>>([]);
  const [cursor, setCursor] = useState<number>(DEFAULT_PAGINATION_CURSOR);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    loadInitialData();
  }, []);

  function startLoading() {
    setIsLoading(true);
  }

  function stopLoading() {
    setIsLoading(false);
  }

  async function loadInitialData() {
    startLoading();
    const dogs = await getPets(cursor);
    setPets(dogs);
    stopLoading();
  }

  function goToPetDetailPage(pet: string) {
    props?.navigation?.navigate('ProductDetail', {pet});
  }

  async function fetchMore() {
    const newCursor =
      cursor + DEFAULT_PAGINATION_CURSOR - DEFAULT_PAGINATION_CURSOR;
    setCursor(newCursor);
    const dogs = await getPets(newCursor);

    setPets(value => [...value, ...dogs]);
  }

  return (
    <Container style={styles?.container}>
      <Header>Pets</Header>
      <PetsList
        key={'#'}
        data={pets}
        renderItem={pet => (
          <PetCard
            url={pet?.item}
            cardStyle={styles?.petCard}
            onPress={goToPetDetailPage}
          />
        )}
        keyExtractor={(pet: string) => pet}
        onEndReachedThreshold={0.5}
        onEndReached={fetchMore}
        refreshing={isLoading}
        onRefresh={loadInitialData}
      />
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
  content: {
    rowGap: 10,
  },
  petCard: {
    width: '49%',
  },
});

export default Product;

import React, {useEffect, useState} from 'react';
import {StyleSheet} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';

import {Container, Header, PetCard, PetsList} from '../components';
import {getPets} from '../api';
import {ProductStackParamList} from '../types/navigation';

export interface ProductProps
  extends StackScreenProps<ProductStackParamList, 'ProductHome'> {}

function Product(props: ProductProps) {
  const [pets, setPets] = useState<Array<string>>([]);

  useEffect(() => {
    loadInitialData();
  }, []);

  async function loadInitialData() {
    const dogs = await getPets();
    setPets(dogs);
  }

  function goToPetDetailPage(pet: string) {
    props?.navigation?.navigate('ProductDetail', {pet});
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

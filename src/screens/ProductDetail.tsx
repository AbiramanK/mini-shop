import React from 'react';
import {StyleSheet} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';

import {Container, Content, Header, PetCard, Text} from '../components';
import {ProductStackParamList} from '../types/navigation';

const dog = {
  name: 'Bloodhound',
  description:
    'The bloodhound is a large scent hound, originally bred for hunting deer, wild boar and, since the Middle Ages, for tracking people. Believed to be descended from hounds once kept at the Abbey of Saint-Hubert, Belgium, in French it is called, le chien de Saint-Hubert.',
};

export interface ProductDetailProps
  extends StackScreenProps<ProductStackParamList, 'ProductDetail'> {}

function ProductDetail(props: ProductDetailProps) {
  function onPressGoBack() {
    props?.navigation?.goBack();
  }

  return (
    <Container style={styles?.container}>
      <Header showGoBack onPressGoBack={onPressGoBack}>
        {dog?.name}
      </Header>
      <Content>
        <PetCard
          url={props?.route?.params?.pet}
          cardStyle={styles?.card}
          coverPicStyle={styles?.coverPic}
          cardCoverTheme={{roundness: 0}}
        />
        <Container style={styles?.informationContainer}>
          <Container>
            <Text variant="subtitle">Name</Text>
            <Text variant="paragraph">{dog?.name}</Text>
          </Container>
          <Container>
            <Text variant="subtitle">Description</Text>
            <Text variant="paragraph">{dog?.description}</Text>
          </Container>
        </Container>
      </Content>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
  card: {
    height: 280,
    borderRadius: 0,
  },
  coverPic: {
    height: '100%',
  },
  informationContainer: {
    paddingVertical: 20,
    rowGap: 10,
  },
});

export default ProductDetail;

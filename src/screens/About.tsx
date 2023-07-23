import React from 'react';
import {StyleSheet} from 'react-native';

import {Container, Content, Header, Text} from '../components';

export interface AboutProps {}

function About(_: AboutProps) {
  return (
    <Container style={styles?.container}>
      <Header>About</Header>
      <Content contentContainerStyle={styles?.content}>
        <Text variant="paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in enim
          consectetur elit efficitur sodales a et lacus. Donec ornare egestas
          enim, et facilisis libero rhoncus sed. Maecenas et nulla id risus
          mattis laoreet. Maecenas mattis sit amet enim eu bibendum. Vestibulum
          vel lacinia velit. Fusce dui augue, vestibulum eu elementum vel,
          gravida nec leo. Donec ex lorem, lacinia commodo fermentum in, tempus
          vitae nisl. Phasellus consequat eleifend dictum. Nunc pulvinar nibh
          non mattis placerat. Aliquam augue eros, viverra in purus quis,
          consectetur eleifend elit. Mauris sit amet lorem dolor. Sed venenatis,
          quam ut elementum aliquet, ligula urna egestas erat, venenatis aliquet
          turpis diam vel sem. Phasellus tempor egestas diam quis placerat.
          Suspendisse potenti. Integer porttitor pellentesque erat. Integer sit
          amet ex eu sem mollis dignissim.
        </Text>
        <Text variant="paragraph">
          Pellentesque dapibus sagittis nibh, sed molestie felis sollicitudin a.
          Vivamus tempus risus ut purus laoreet, a efficitur est sollicitudin.
          Vestibulum nec felis metus. In faucibus ornare neque, quis iaculis mi
          vestibulum ac. Pellentesque consectetur sollicitudin quam a euismod.
          Sed ultrices elit non cursus volutpat. Mauris quis ullamcorper ante.
          Aliquam vestibulum enim vel dolor dapibus, eget fringilla felis
          viverra.
        </Text>
        <Text variant="paragraph">
          Fusce eget leo id nisl ultricies congue nec sed ante. Sed fringilla
          enim ac ex tempor, in lacinia elit ultrices. Morbi in fringilla
          libero, ut pharetra urna. Donec non quam quis erat molestie
          scelerisque ac laoreet tellus. Donec sit amet urna accumsan ex
          bibendum rhoncus eget eu magna. Vivamus fermentum velit pellentesque
          ultricies varius. Proin faucibus dolor lobortis mi eleifend, ac
          posuere arcu semper. In metus ante, laoreet sit amet dolor a, accumsan
          lobortis magna. Morbi pulvinar nec ligula non dignissim.
        </Text>
        <Text variant="paragraph">
          Nullam sed facilisis odio, ac dignissim tellus. Vivamus a dui purus.
          Vivamus efficitur placerat ante sed lacinia. Aenean sit amet
          sollicitudin justo, non luctus magna. Morbi in pretium ex. Duis
          posuere mauris scelerisque tincidunt congue. Nulla ullamcorper turpis
          ac dapibus pulvinar. Vivamus blandit feugiat erat, ac lacinia erat
          eleifend non. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Sed dolor ligula, eleifend ut lectus vitae, dictum imperdiet dui. Ut
          pretium auctor sapien, eu blandit felis sollicitudin quis. Phasellus
          rutrum vehicula vestibulum. Vivamus non ante leo. Donec sem lorem,
          consequat sit amet ligula non, commodo vehicula orci.
        </Text>
        <Text variant="paragraph">
          In hac habitasse platea dictumst. Integer quis purus quis mi aliquet
          commodo. Aliquam vestibulum libero vel ornare consequat. Morbi dapibus
          non elit id placerat. Vivamus ac convallis nisl. Nullam a nunc ut
          ligula fermentum pretium. Mauris dapibus egestas sodales. Fusce
          sollicitudin eleifend interdum.
        </Text>
      </Content>
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
});

export default About;

import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { Container, ProductList } from './styles'
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { View } from 'react-native';

import { useCart } from '../../hooks/cart';

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

const Dashboard: React.FC = () => {
  // const { increment, decrement, products } = useCart();
  return (
    <ProductList
      data={[1, 2]}
      keyExtractor={item => item.id}
      ListFooterComponent={<View />}
      ListFooterComponentStyle={{
        height: 80,
      }}
      renderItem={({ }: {}) => (
        <Card style={styles.container}>
          <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} />
          <Card.Content>
            <Title>Card title</Title>
            <Paragraph>Card content</Paragraph>
          </Card.Content>
          <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
          <Card.Actions>
            <Button>Cancel</Button>
            <Button>Ok</Button>
          </Card.Actions>
        </Card>)}
    />);
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 25,
    marginLeft: 5,
    marginRight: 5,
    // borderColor: '#944040', // if you need
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 12,
  },
});
export default Dashboard;

import styled from 'styled-components/native';
import { FlatList } from 'react-native';

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const ProductList = styled(FlatList)`
  flex: 1;
  padding: 0 10px;
`;

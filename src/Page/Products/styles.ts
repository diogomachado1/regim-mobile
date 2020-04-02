import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { List as ListUI } from '@ui-kitten/components';

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: #f3f3f3;
`;

export const List = styled(ListUI)`
  flex: 1;
  background-color: #f3f3f3;
`;

export const Header = styled.View`
  align-self: stretch;
  height: 50px;
  z-index: 200;
  background-color: #fff;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  flex-direction: row;
`;

export const HeaderButtons = styled.View`
  flex-direction: row;
`;

import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  background-color: white;
`;

export const Content = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 10px 10px 15px;
  align-items: center;
`;

export const EmptyIcon = styled.View`
  height: 30px;
  width: 40px;
`;

export const Button = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})`
  align-items: center;
  justify-content: center;
  height: 30px;
  width: 30px;
  margin-right: 10px;
`;

import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  width: 54px;
  height: 54px;
  border-radius: 27px;
  background: ${({theme}) => theme.colors.primary};
  padding: 11px;
  elevation: 5;
`;

export const Icon = styled.Image`
  width: 32px;
  height: 32px;
`;

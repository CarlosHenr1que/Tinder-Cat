import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: ${({theme}) => theme.colors.background};
  padding: ${({theme}) => theme.metrics.basePadding * 2}px;
`;

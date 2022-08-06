import styled from 'styled-components/native';

export const Container = styled.View`
  border-top-left-radius: ${({theme}) => theme.metrics.baseRadius}px;
  border-top-right-radius: ${({theme}) => theme.metrics.baseRadius}px;
`;

export const Image = styled.Image`
  width: ${({theme}) =>
    theme.metrics.screenWidth - theme.metrics.basePadding * 4}px;
  height: 446px;
  border-radius: ${({theme}) => theme.metrics.baseRadius}px;
`;

export const InfoCard = styled.View`
  background: ${({theme}) => theme.colors.primary};
  width: ${({theme}) =>
    theme.metrics.screenWidth - theme.metrics.basePadding * 8}px;
  height: 48px;
  border-top-left-radius: ${({theme}) => theme.metrics.baseRadius}px;
  border-top-right-radius: ${({theme}) => theme.metrics.baseRadius}px;

  position: absolute;
  bottom: 0px;
  align-self: center;

  padding: ${({theme}) => theme.metrics.basePadding}px
    ${({theme}) => theme.metrics.basePadding * 2}px;
`;

export const Information = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Title = styled.Text`
  font-family: 'NunitoSans-Bold';
  font-size: 16px;
  color: ${({theme}) => theme.colors.secundary};
`;

export const Position = styled.Text`
  font-family: 'NunitoSans-Bold';
  font-size: 16px;
  color: ${({theme}) => theme.colors.secundary};
`;

export const Description = styled.Text`
  font-family: 'NunitoSans-Bold';
  font-size: 8px;
  color: #bfbfc0;
`;

import styled from 'styled-components/native';

interface ContainerProps {
  mutiplier: number;
  horizontal?: boolean;
}

export const Container = styled.View<ContainerProps>`
  width: ${props =>
    props.horizontal ? props.theme.metrics.baseMargin * props.mutiplier : 0}px;
  height: ${props =>
    props.horizontal ? 0 : props.theme.metrics.baseMargin * props.mutiplier}px;
`;

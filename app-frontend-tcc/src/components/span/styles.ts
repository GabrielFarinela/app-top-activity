import styled from 'styled-components';

interface SpanProps {
  color: string;
  size: string;
}

export const StyledSpan = styled.span<SpanProps>`
  color: ${props => props.color};
  font-size: ${props => props.size};
`;
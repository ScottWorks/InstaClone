import styled from 'styled-components';

export const Icon = styled.img`
  margin: ${(props) => props.margin || '0px 0px 0px 24px'};
  height: ${(props) => props.height};
  width: ${(props) => props.width};
`;

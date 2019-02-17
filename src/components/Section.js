import styled from 'styled-components';

export const Section = styled.section`
  text-align: ${(props) => props.textAlign || 'center'};
  margin: ${(props) => props.margin || 0};
  height: ${(props) => props.height};
  width: ${(props) => props.width};
`;

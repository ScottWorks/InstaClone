import styled from 'styled-components';

export const Image = styled.img`
  border-radius: ${(props) => (props.circular ? '50%' : '0%')};
  height: ${(props) => props.height || '100%'};
  width: ${(props) => props.width || '100%'};
`;

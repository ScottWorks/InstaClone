import styled from 'styled-components';

export const Image = styled.img`
  border-radius: ${(props) => (props.circular ? '50%' : '0%')};
  height: 100%;
  width: 100%;
`;

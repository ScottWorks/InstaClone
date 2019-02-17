import styled from 'styled-components';

export const Button = styled.button`
  height: ${(props) => props.height || '100%'};
  width: ${(props) => props.width || '100%'};
  border: 1px solid #dbdbdb;
  border-radius: 4px;
  margin: ${(props) => props.margin || 0};
  background-color: transparent;
  color: #262626;
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  cursor: pointer;
`;

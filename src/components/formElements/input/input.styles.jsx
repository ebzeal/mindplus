import styled from 'styled-components';

const InputDiv = styled.input.attrs(({ type, size, placeholder }) => ({
  type,
  size: size || '1em',
  placeholder
}))`
  color: rgba(0, 0, 0, 0.6);
  font-size: 1em;
  -webkit-box-shadow: 5px 5px 31px 5px rgba(0, 0, 0, 0.16);
  box-shadow: 5px 5px 31px 5px rgba(0, 0, 0, 0.16);
  border-radius: 3px;
  border: none;

  margin: ${props => props.size};
  margin-left: -3px;
  padding: ${props => props.size};
`;

export default InputDiv;

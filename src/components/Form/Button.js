import styled from 'styled-components'

/*const Button = styled.button`
  background-color: blue;
  color: white;
`;*/

const Button = styled.button`
  ${(props) => `
     background-color: ${props.theme['$btn-primary-bg']};
     color: ${props.theme['$btn-primary-color']};
  `};
`;

export default Button;
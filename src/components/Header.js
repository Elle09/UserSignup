import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.div`
  text-align: center;
  padding: 10px;
  color: ${props => props.titleColor};
  background-color: ${props => props.titleBackgroundColor};
`;

function Header ({ title: Title, ...rest }) {
  return(
  <StyledHeader {...rest}>
    {typeof Title === 'string' ? <h3>{Title}</h3> : Title}
  </StyledHeader>
  );
}  
Header.defaultProps={
  title: "Welcome Here !",
  titleColor:"green"
}

export default Header;

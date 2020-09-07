import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
  padding: 20px;
  text-align: center;

  h1 {
    font-size: 96px;
  }
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <h1>Movieland</h1>
    </HeaderWrapper>
  );
};

export default Header;

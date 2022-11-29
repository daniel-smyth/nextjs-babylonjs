import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from '@emotion/styled';

import CssBaseline from '@mui/material/CssBaseline';

import Settings from 'components/Settings';
import GlobalStyle from 'components/GlobalStyle';

const Root = styled.div`
  max-width: 520px;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  display: flex;
  min-height: 100%;
  flex-direction: column;
`;

function Auth({ children }: { children: any }) {
  return (
    <Root>
      <CssBaseline />
      <GlobalStyle />
      {children}
      <Outlet />
      <Settings />
    </Root>
  );
}

export default Auth;

import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from '@emotion/styled';

import { CssBaseline } from '@mui/material';

import GlobalStyle from 'components/GlobalStyle';
import Settings from 'components/Settings';
import SceneNavbar from 'components/SceneNavbar';

const Root = styled.div`
  display: flex;
  min-height: 100vh;
`;

const AppContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

function SceneLayout({ children }: { children: any }) {
  return (
    <Root>
      <CssBaseline />
      <GlobalStyle />
      <AppContent>
        <SceneNavbar />
        {children}
        <Outlet />
      </AppContent>
      <Settings />
    </Root>
  );
}

export default SceneLayout;

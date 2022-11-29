import React, { useState } from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';

import { spacing, SpacingProps } from '@mui/system';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import MuiButton, { ButtonProps } from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';

import DanielSmythLogo from 'vendor/logo.svg';
import useBabylonJS from 'hooks/useBabylonJS';

const Button = styled(MuiButton)<
  SpacingProps & ButtonProps & { target?: string }
>(spacing);

const Logo = styled(DanielSmythLogo)`
  margin-right: ${(props) => props.theme.spacing(2)};
  margin-top: -2px;
  width: 150px;

  vertical-align: middle;
  display: inline;
`;

const LogoDiv = styled.div`
  font-size: ${(props) => props.theme.typography.h5.fontSize};
  font-weight: ${(props) => props.theme.typography.fontWeightMedium};
  font-family: ${(props) => props.theme.typography.fontFamily};
`;

const LogoComponent = React.forwardRef((props: any, ref: any) => (
  <a href={props.href} onClick={props.onClick} ref={ref}>
    <Logo style={{ cursor: 'pointer' }} />
  </a>
));

function SceneNavbar() {
  const { scene } = useBabylonJS();
  const [buttonText, setButtonText] = useState('Open Debug');

  // Show BabylonJS scene inspector
  const onClick = () => {
    if (scene!.debugLayer.isVisible()) {
      scene!.debugLayer.hide();
      setButtonText('Open Debug');
    } else {
      scene!.debugLayer.show();
      setButtonText('Close Debug');
    }
  };

  return (
    <AppBar position="relative" color="transparent" elevation={0}>
      <Toolbar>
        <Container>
          <Grid container alignItems="center">
            <Grid item>
              <LogoDiv>
                <Link href="/" passHref>
                  <LogoComponent />
                </Link>
              </LogoDiv>
            </Grid>
            <Grid item xs />
            <Grid item>
              <Button
                onClick={() => onClick()}
                ml={2}
                color="secondary"
                variant="contained"
              >
                {buttonText}
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Toolbar>
    </AppBar>
  );
}

export default SceneNavbar;

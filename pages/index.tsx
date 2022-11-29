import React, { ReactElement } from 'react';
import { useRouter } from 'next/router';
import styled from '@emotion/styled';
import { rgba } from 'polished';

import { ArrowForward as ArrowForwardIcon } from '@mui/icons-material';
import { spacing } from '@mui/system';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import MuiButton from '@mui/material/Button';
import MuiTypography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';

import Presentation from 'layouts/Presentation';

const Typography = styled(MuiTypography)(spacing);

const Wrapper = styled.div`
  padding-top: 3.5rem;
  position: relative;
  text-align: center;
  overflow: hidden;
`;

const Content = styled.div`
  padding: ${(props) => props.theme.spacing(6)} 0;
  line-height: 150%;
`;

const Icon = styled.img`
  vertical-align: middle;
  margin-right: ${(props) => props.theme.spacing(3)};
  height: auto;
`;

const Title = styled(Typography)`
  opacity: 0.9;
  line-height: 1.4;
  font-size: 1.75rem;
  font-weight: ${(props) => props.theme.typography.fontWeightBold};
  ${(props) => props.theme.breakpoints.up('sm')} {
    font-size: 2rem;
  }
  ${(props) => props.theme.breakpoints.up('md')} {
    font-size: 2.5rem;
  }
  span {
    color: ${(props) => props.theme.palette.secondary.main};
  }
`;

const ArrowForward = styled(ArrowForwardIcon)`
  margin-left: ${(props) => props.theme.spacing(2)};
`;

const Version = styled(MuiTypography)`
  color: ${(props) => props.theme.palette.primary.main};
  font-weight: ${(props) => props.theme.typography.fontWeightBold};
  background: ${(props) => rgba(props.theme.palette.primary.main, 0.1)};
  box-shadow: 0 1px 1px
    ${(props) => rgba(props.theme.palette.primary.main, 0.25)};
  padding: 3px 8px;
  border-radius: 4px;
  margin-bottom: ${(props) => props.theme.spacing(3)};
  display: inline-block;
`;

const Button = styled(MuiButton)(spacing);

function Introduction() {
  const router = useRouter();

  const onClick = () => {
    router.push('/scene');
  };

  return (
    <Wrapper>
      <Container>
        <Grid container alignItems="center" justifyContent="center" spacing={4}>
          <Grid item xs={12} sm={9} md={8} lg={8}>
            <Content>
              <Version variant="body2">v1.0.0</Version>
              <Title variant="h1" gutterBottom>
                <span>Next.JS</span> with <span>BabylonJS</span>
              </Title>
              <Box my={6}>
                <Button
                  mx={2}
                  onClick={onClick}
                  variant="contained"
                  color="secondary"
                  size="large"
                >
                  Load Scene
                  <ArrowForward />
                </Button>
              </Box>
              <Typography variant="body2" color="textSecondary">
                All Code Written by Daniel Smyth
              </Typography>
              <Box mt={3} mb={10}>
                <Tooltip title="BabylonJS">
                  <Icon
                    height="90px"
                    width="90px"
                    alt="BabylonJS Icon"
                    src="./img/brands/babylonjs.svg"
                  />
                </Tooltip>
                <Tooltip title="Next.JS">
                  <Icon
                    height="50px"
                    width="50px"
                    alt="Next.JS Icon"
                    src="./img/brands/next-js.svg"
                  />
                </Tooltip>
                <Tooltip title="React.JS">
                  <Icon
                    height="30px"
                    width="30px"
                    alt="React.JS Icon"
                    src="./img/brands/react.svg"
                  />
                </Tooltip>
                <Tooltip title="TypeScript">
                  <Icon
                    height="25px"
                    width="25px"
                    alt="TypeScript Icon"
                    src="./img/brands/typescript.svg"
                  />
                </Tooltip>
              </Box>
            </Content>
          </Grid>
        </Grid>
      </Container>
    </Wrapper>
  );
}

Introduction.getLayout = function getLayout(page: ReactElement) {
  return <Presentation>{page}</Presentation>;
};

export default Introduction;

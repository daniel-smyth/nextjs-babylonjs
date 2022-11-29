import React from 'react';
import type { ReactElement } from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';
import { Helmet } from 'react-helmet-async';

import MuiButton from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { spacing } from '@mui/system';
import AuthLayout from '../layouts/Auth';

const Button = styled(MuiButton)(spacing);

const Wrapper = styled.div`
  padding: ${(props) => props.theme.spacing(6)};
  text-align: center;
  background: transparent;

  ${(props) => props.theme.breakpoints.up('md')} {
    padding: ${(props) => props.theme.spacing(10)};
  }
`;

function Page404() {
  return (
    <Wrapper>
      <Helmet title="404 Error" />
      <Typography component="h1" variant="h1" align="center" gutterBottom>
        404
      </Typography>
      <Typography component="h2" variant="h5" align="center" gutterBottom>
        Page not found.
      </Typography>
      <Typography component="h2" variant="body1" align="center" gutterBottom>
        The page you are looking for might have been removed.
      </Typography>

      <Link href="/" passHref>
        <Button variant="contained" color="secondary" mt={2}>
          Return to website
        </Button>
      </Link>
    </Wrapper>
  );
}

Page404.getLayout = function getLayout(page: ReactElement) {
  return <AuthLayout>{page}</AuthLayout>;
};

export default Page404;

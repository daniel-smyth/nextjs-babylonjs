/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Global, css } from '@emotion/react';

function GlobalStyle(props: any) {
  return (
    <Global
      {...props}
      styles={css`
        html,
        body,
        #__next {
          height: 100%;
        }

        body {
          margin: 0;
        }

        .MuiCardHeader-action .MuiIconButton-root {
          padding: 4px;
          width: 28px;
          height: 28px;
        }
      `}
    />
  );
}

export default GlobalStyle;

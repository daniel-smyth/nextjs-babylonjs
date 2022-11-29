/* eslint-disable no-unused-vars */
import React, { ReactElement } from 'react';
import useBabylonJS from 'hooks/useBabylonJS';

function Scene(): ReactElement {
  const { canvas } = useBabylonJS();

  return <canvas ref={canvas} style={{ width: '90%' }} id="renderCanvas" />;
}

export default Scene;

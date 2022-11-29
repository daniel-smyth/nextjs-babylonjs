import React, { ReactElement } from 'react';
import styled from '@emotion/styled';

import Scene from 'components/Scene';
import { BabylonJSProvider } from 'contexts/BabylonJSContext';
import SceneLayout from 'layouts/Scene';
import Script from 'next/script';

const Wrapper = styled.div`
  padding-top: 1rem;
  position: relative;
  text-align: center;
  overflow: hidden;
  min-height: 100%;
`;

function Introduction() {
  return (
    <>
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/dat-gui/0.6.2/dat.gui.min.js" />
      <Script src="https://preview.babylonjs.com/ammo.js" />
      <Script src="https://preview.babylonjs.com/cannon.js" />
      <Script src="https://preview.babylonjs.com/Oimo.js" />
      <Script src="https://preview.babylonjs.com/earcut.min.js" />
      <Script src="https://preview.babylonjs.com/babylon.js" />
      <Script src="https://preview.babylonjs.com/materialsLibrary/babylonjs.materials.min.js" />
      <Script src="https://preview.babylonjs.com/proceduralTexturesLibrary/babylonjs.proceduralTextures.min.js" />
      <Script src="https://preview.babylonjs.com/postProcessesLibrary/babylonjs.postProcess.min.js" />
      <Script src="https://preview.babylonjs.com/loaders/babylonjs.loaders.js" />
      <Script src="https://preview.babylonjs.com/serializers/babylonjs.serializers.min.js" />
      <Script src="https://preview.babylonjs.com/gui/babylon.gui.min.js" />
      <Script src="https://preview.babylonjs.com/inspector/babylon.inspector.bundle.js" />

      <Wrapper>
        <Scene />
      </Wrapper>
    </>
  );
}

Introduction.getLayout = function getLayout(page: ReactElement) {
  return (
    <BabylonJSProvider>
      <SceneLayout>{page}</SceneLayout>
    </BabylonJSProvider>
  );
};

export default Introduction;

/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useEffect, useRef, useState } from 'react';
import { Scene, Engine } from '@babylonjs/core';
import onRender from 'library/babylonjs/onRender';
import onSceneReady from 'library/babylonjs/onSceneReady';
import { BabylonJSContextType } from 'types/babylonjs';

const BabylonJSContext = React.createContext<BabylonJSContextType | null>(null);

function BabylonJSProvider({ children }: { children: React.ReactNode }) {
  const [scene, setScene] = useState<Scene>();
  const canvas = useRef(null);

  useEffect(() => {
    const { current: sceneCanvas } = canvas;
    if (!sceneCanvas) return undefined;

    const babylonEngine = new Engine(sceneCanvas);
    const babylonScene = new Scene(babylonEngine);

    if (babylonScene.isReady()) {
      onSceneReady(babylonScene);

      setScene(babylonScene);
    } else
      babylonScene.onReadyObservable.addOnce((readyScene) =>
        onSceneReady(readyScene)
      );

    babylonEngine.runRenderLoop(() => {
      onRender(babylonScene);
      babylonScene.render();
    });

    // Window resize
    const resize = () => babylonScene.getEngine().resize();
    if (window) window.addEventListener('resize', resize);

    return () => {
      babylonScene.getEngine().dispose();
      if (window) window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <BabylonJSContext.Provider value={{ scene, canvas }}>
      {children}
    </BabylonJSContext.Provider>
  );
}

export { BabylonJSProvider, BabylonJSContext };

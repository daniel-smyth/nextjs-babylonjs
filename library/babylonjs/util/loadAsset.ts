import { Scene, AssetContainer, SceneLoader } from '@babylonjs/core';

export default function loadAsset(
  url: string,
  name: string,
  scene: Scene
): Promise<AssetContainer> {
  return new Promise((res) => {
    SceneLoader.LoadAssetContainer(url, name, scene, (container) =>
      res(container)
    );
  });
}

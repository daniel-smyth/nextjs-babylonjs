import { Scene, Tools } from '@babylonjs/core';

import '@babylonjs/loaders/glTF';
import loadAsset from '../util/loadAsset';

export default async function renderPistol(scene: Scene) {
  const rootUrl = Tools.GetFolderPath(
    'https://dl.dropbox.com/s/p0qoneu3468q956/m1911.glb'
  );

  const fileName = Tools.GetFilename(
    'https://dl.dropbox.com/s/p0qoneu3468q956/m1911.glb'
  );

  const pistol = await loadAsset(rootUrl, fileName, scene);

  if (pistol) {
    pistol.instantiateModelsToScene((name) => name);
  } else {
    throw new Error('No view cube at that URL.');
  }
}

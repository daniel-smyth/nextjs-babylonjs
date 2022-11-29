/* eslint-disable no-param-reassign */
import {
  ArcRotateCamera,
  HemisphericLight,
  InstantiatedEntries,
  Mesh,
  PointerEventTypes,
  Scene,
  Tools,
  Vector3,
  Viewport
} from '@babylonjs/core';
import '@babylonjs/loaders/glTF';
import loadAsset from '../util/loadAsset';
import MyCamera from '../sceneessentials/camera';

export default async function renderViewCube(scene: Scene) {
  // Create new scene for view cube
  const viewCubeScene = new Scene(scene.getEngine());
  viewCubeScene.autoClear = false;

  // Create camera for view cube scene
  const viewCubeCamera = new ArcRotateCamera(
    'camera',
    0,
    0,
    5,
    Vector3.Zero(),
    viewCubeScene
  );

  viewCubeCamera.viewport = new Viewport(0.84, 0.798, 0.225, 0.225);

  // Create lights.
  const position1 = new Vector3(-1, -0.5, 0);
  const light1 = new HemisphericLight(
    'viewCubeLight1',
    position1,
    viewCubeScene
  );
  light1.intensity = 0.7;

  const position2 = new Vector3(0.5, 0.5, 0);
  const light2 = new HemisphericLight(
    'viewCubeLight2',
    position2,
    viewCubeScene
  );
  light2.intensity = 0.7;

  // Render view cube scene over the vehicle designer scene.
  const actualSceneCamera = scene.activeCamera as ArcRotateCamera;

  if (actualSceneCamera)
    scene.afterRender = () => {
      viewCubeScene.render();
      viewCubeCamera.alpha = actualSceneCamera.alpha;
      viewCubeCamera.beta = actualSceneCamera.beta;
      viewCubeCamera.radius = 13;
    };

  // Load cube.
  const rootUrl = Tools.GetFolderPath(
    'https://dl.dropbox.com/s/p1qtd8vkbyw9y3p/viewCube.glb'
  );

  const fileName = Tools.GetFilename(
    'https://dl.dropbox.com/s/p1qtd8vkbyw9y3p/viewCube.glb'
  );

  const viewCube = await loadAsset(rootUrl, fileName, viewCubeScene);
  let asset = new InstantiatedEntries();

  if (viewCube) {
    asset = viewCube.instantiateModelsToScene((name) => name);
  } else {
    throw new Error('No view cube at that URL.');
  }

  // Get action event meshes from import
  const meshes = asset.rootNodes[0].getChildMeshes();

  const frontView = meshes.find((mesh) => mesh.name === 'frontView');
  const frontViewMesh = frontView as Mesh;

  const leftView = meshes.find((mesh) => mesh.name === 'leftView');
  const leftViewMesh = leftView as Mesh;

  const topView = meshes.find((mesh) => mesh.name === 'topView');
  const topViewMesh = topView as Mesh;

  const freeView = meshes.find((mesh) => mesh.name === 'freeView');
  const freeViewMesh = freeView as Mesh;

  // Add click behaviour.
  viewCubeScene.onPointerObservable.add((pointerInfo) => {
    const mesh = pointerInfo.pickInfo?.pickedMesh;
    const sceneCamera = scene.cameras[0] as MyCamera;

    switch (pointerInfo.type) {
      case PointerEventTypes.POINTERDOWN:
        if (mesh === topViewMesh)
          sceneCamera.setOrthographicTopView(new Vector3(0, 0, 0));

        if (mesh === leftViewMesh)
          sceneCamera.setOrthographicLeftView(new Vector3(0, 0, 0));

        if (mesh === frontViewMesh)
          sceneCamera.setOrthographicFrontView(new Vector3(0, 0, 0));

        if (mesh === freeViewMesh) sceneCamera.setFreeView();
        break;

      case PointerEventTypes.POINTERDOUBLETAP:
        sceneCamera.setFreeView();
        break;

      default:
        break;
    }
  });
}

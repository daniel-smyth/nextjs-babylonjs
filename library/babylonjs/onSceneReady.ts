/* eslint-disable no-param-reassign */
import {
  Scene,
  Vector3,
  HemisphericLight,
  Color4,
  Color3,
  CreateGround
} from '@babylonjs/core';
import { GridMaterial } from '@babylonjs/materials';
import renderViewCube from './scenecontrols/viewCube';
import MyCamera from './sceneessentials/camera';
import renderPistol from './sceneobjects/pistol';

export default function onSceneReady(scene: Scene) {
  // Create my camera
  const camera = new MyCamera(scene);
  camera.setPosition(new Vector3(0.04, 0.01, 0.05));
  camera.setTarget(Vector3.Zero());

  // Add hemispheric light
  const light = new HemisphericLight('light', new Vector3(0, 0, 1), scene);
  light.intensity = 0.7;

  // Create scene's enviroment
  scene.createDefaultEnvironment({
    createGround: false,
    createSkybox: false
  });

  // Update scene's clear color
  scene.clearColor = Color4.FromColor3(new Color3(0.16, 0, 0));

  // Render grid
  const ground = CreateGround('ground', {
    width: 200,
    height: 200,
    subdivisions: 2
  });

  ground.isPickable = false;

  const groundMaterial = new GridMaterial('GridMaterial');

  groundMaterial.gridRatio = 0.01;
  groundMaterial.backFaceCulling = false;
  groundMaterial.opacity = 0.98;
  groundMaterial.mainColor = new Color3(1, 1, 1);
  groundMaterial.lineColor = new Color3(0.64, 0.04, 0.04);

  ground.material = groundMaterial;

  // Scene controls - currently just the view cube
  renderViewCube(scene);

  renderPistol(scene);
}

/* eslint-disable no-underscore-dangle */
import {
  Animation,
  ArcRotateCamera,
  Camera,
  CubicEase,
  EasingFunction,
  Scene,
  Vector3
} from '@babylonjs/core';

export default class MyCamera extends ArcRotateCamera {
  scene: Scene;

  constructor(scene: Scene) {
    super('camera', 0, 0, 5, new Vector3(0, 0, 1), scene);

    this.scene = scene;

    // Create camera.
    this.scene.createDefaultCamera(true);
    const canvas = document.getElementById('renderCanvas') as HTMLCanvasElement;

    // Camera settings.
    this.useFramingBehavior = true;
    this.lowerRadiusLimit = null;
    this.scene.activeCamera!.attachControl(canvas, true);
    canvas.addEventListener('wheel', (evt) => evt.preventDefault()); // prevents scrolling on zoom

    // Position.
    this.wheelPrecision = 2000;
    this.minZ = 0.01;

    this.scene.useRightHandedSystem = true;
  }

  public setOrthographicFrontView(target: Vector3) {
    this.moveActiveCameraWithAnimation(
      0.06480740698407861,
      -0.00011474771866550574,
      1.5702570638231192,
      target
    );
    // this.setToOrthographicMode();
  }

  public setOrthographicLeftView(target: Vector3) {
    this.moveActiveCameraWithAnimation(
      0.06480740698407861,
      1.572012054067558,
      1.5700367599439677,
      target
    );
    // this.setToOrthographicMode();
    // this._panningMouseButton = 0;
    // this.panningAxis = new Vector3(1, 0, 0);
  }

  public setOrthographicTopView(target: Vector3) {
    this.moveActiveCameraWithAnimation(
      0.06480740698407861,
      0.0016985248297368342,
      0.027155372196070608,
      target
    );
    // this.setToOrthographicMode();
    // this._panningMouseButton = 0;
    // this.panningAxis = new Vector3(1, 0, 0);
  }

  public setFreeView() {
    this.attachControl(
      document.getElementById('renderCanvas') as HTMLCanvasElement,
      true
    );
    this.mode = Camera.PERSPECTIVE_CAMERA;
  }

  // private setToOrthographicMode() {
  //   this.mode = Camera.ORTHOGRAPHIC_CAMERA;
  //   this.minZ = 0.01;
  //   this.orthoTop = 2;
  //   this.orthoBottom = -2;
  //   this.orthoLeft = -2;
  //   this.orthoRight = 2;

  //   const zoomOnOrtho = (mouseWheel: any) => {
  //     const mouseWheelDirection = mouseWheel.event.wheelDelta;
  //     if (mouseWheelDirection < 0) {
  //       this.orthoTop = this.orthoTop! + 0.5;
  //       this.orthoBottom = this.orthoBottom! - 0.5;
  //       this.orthoLeft = this.orthoLeft! - 1;
  //       this.orthoRight = this.orthoRight! + 1;
  //     } else if (mouseWheelDirection > 0) {
  //       this.orthoTop = this.orthoTop! - 0.5;
  //       this.orthoBottom = this.orthoBottom! + 0.5;
  //       this.orthoLeft = this.orthoLeft! + 1;
  //       this.orthoRight = this.orthoRight! - 1;
  //     }
  //   };
  //   this.scene.onPointerObservable.add(zoomOnOrtho, 0x08);
  // }

  private moveActiveCameraWithAnimation(
    radius: Number,
    alpha: Number,
    beta: Number,
    target: Vector3
  ) {
    const createCameraAnimation = (prop: string, from: Number, to: Number) => {
      const fps = 60;
      const ease = new CubicEase();
      ease.setEasingMode(EasingFunction.EASINGMODE_EASEINOUT);

      const animation = Animation.CreateAnimation(
        prop,
        Animation.ANIMATIONTYPE_FLOAT,
        fps,
        ease
      );

      animation.setKeys([
        { frame: 0, value: from },
        { frame: 100, value: to }
      ]);

      return animation;
    };

    const [speedRatio, loop, from, to] = [4, false, 0, 100];

    this.animations = [
      createCameraAnimation('radius', this.radius, radius),
      createCameraAnimation('alpha', this.alpha, alpha),
      createCameraAnimation('beta', this.beta, beta),
      createCameraAnimation('target.x', this.target.x, target.x),
      createCameraAnimation('target.y', this.target.y, target.y),
      createCameraAnimation('target.z', this.target.z, target.z)
    ];

    this.scene.beginAnimation(this, from, to, loop, speedRatio);
  }
}

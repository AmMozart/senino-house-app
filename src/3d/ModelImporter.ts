import * as BABYLON from 'babylonjs';
import { ISceneLoaderAsyncResult } from 'babylonjs/Loading/sceneLoader';

export class ModelImporter {

  public static async import(scene: BABYLON.Scene): Promise<ISceneLoaderAsyncResult> {
    const result = await BABYLON.SceneLoader.ImportMeshAsync('', './models/', 'plan.babylon', scene);
    return result;
  }
}

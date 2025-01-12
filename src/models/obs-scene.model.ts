export interface ObsScene {
  sceneName: string;
  sceneUuid: string;
}

export interface IndexedObsScene extends ObsScene {
  sceneIndex: number;
}

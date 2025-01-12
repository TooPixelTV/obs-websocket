import { IndexedObsScene, ObsScene, ObsSceneTransition } from '../models';

export interface IScenesRequestsService {
  getScenes(): Promise<Array<IndexedObsScene> | null>;
  getGroups(): Promise<Array<string> | null>;
  getCurrentScene(): Promise<ObsScene | null>;
  setCurrentScene(requestData: {
    sceneName?: string;
    sceneUuid?: string;
  }): Promise<boolean>;
  getCurrentPreviewScene(): Promise<ObsScene | null>;
  setPreviewScene(requestData: {
    sceneName?: string;
    sceneUuid?: string;
  }): Promise<boolean>;
  createScene(requestData: { sceneName: string }): Promise<boolean>;
  removeScene(requestData: {
    sceneName?: string;
    sceneUuid?: string;
  }): Promise<boolean>;
  setSceneName(requestData: {
    newSceneName: string;
    sceneName?: string;
    sceneUuid?: string;
  }): Promise<boolean>;
  getSceneTransitionOverride(requestData: {
    sceneName?: string;
    sceneUuid?: string;
  }): Promise<ObsSceneTransition | null>;
  setSceneTransitionOverride(requestData: {
    sceneName?: string;
    sceneUuid?: string;
    transitionName?: string | null;
    transitionDuration?: number | null;
  }): Promise<boolean>;
}

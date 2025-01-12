import OBSWebSocket from 'obs-websocket-js';

import { IScenesRequestsService } from '../interfaces/scenes-requests-service.interface';
import { IndexedObsScene, ObsScene } from '../models';
import { ObsSceneTransition } from '../models/obs-scene-transition.model';

export default class LocalScenesRequestsService
  implements IScenesRequestsService
{
  private obs: OBSWebSocket;

  constructor(obs: OBSWebSocket) {
    this.obs = obs;
  }

  public async getScenes(): Promise<Array<IndexedObsScene> | null> {
    try {
      const result = await this.obs.call('GetSceneList');

      if (result) {
        return result.scenes as unknown as Array<IndexedObsScene>;
      }
    } catch (e) {
      return null;
    }
    return null;
  }

  public async getGroups(): Promise<Array<string> | null> {
    try {
      const result = await this.obs.call('GetGroupList');
      if (result) {
        return result.groups;
      }
    } catch (e) {
      return null;
    }
    return null;
  }

  public async getCurrentScene(): Promise<ObsScene | null> {
    try {
      const result = await this.obs.call('GetCurrentProgramScene');
      if (result) {
        return result;
      }
    } catch (e) {
      return null;
    }
    return null;
  }

  public async setCurrentScene(requestData: {
    sceneName?: string;
    sceneUuid?: string;
  }): Promise<boolean> {
    try {
      await this.obs.call('SetCurrentProgramScene', requestData);
      return true;
    } catch (e) {
      return false;
    }
  }

  public async getCurrentPreviewScene(): Promise<ObsScene | null> {
    try {
      const result = await this.obs.call('GetCurrentPreviewScene');
      if (result) {
        return result;
      }
    } catch (e) {
      return null;
    }
    return null;
  }

  public async setPreviewScene(requestData: {
    sceneName?: string;
    sceneUuid?: string;
  }): Promise<boolean> {
    try {
      await this.obs.call('SetCurrentPreviewScene', requestData);
      return true;
    } catch (e) {
      return false;
    }
  }

  public async createScene(requestData: {
    sceneName: string;
  }): Promise<boolean> {
    try {
      await this.obs.call('CreateScene', requestData);
      return true;
    } catch (e) {
      return false;
    }
  }

  public async removeScene(requestData: {
    sceneName?: string;
    sceneUuid?: string;
  }): Promise<boolean> {
    try {
      await this.obs.call('RemoveScene', requestData);
      return true;
    } catch (e) {
      return false;
    }
  }

  public async setSceneName(requestData: {
    newSceneName: string;
    sceneName?: string;
    sceneUuid?: string;
  }): Promise<boolean> {
    try {
      await this.obs.call('SetSceneName', requestData);
      return true;
    } catch (e) {
      return false;
    }
  }

  public async getSceneTransitionOverride(requestData: {
    sceneName?: string;
    sceneUuid?: string;
  }): Promise<ObsSceneTransition | null> {
    try {
      const result = await this.obs.call(
        'GetSceneSceneTransitionOverride',
        requestData
      );
      if (result) {
        return result;
      }
    } catch (e) {
      return null;
    }

    return null;
  }

  public async setSceneTransitionOverride(requestData: {
    sceneName?: string;
    sceneUuid?: string;
    transitionName?: string | null;
    transitionDuration?: number | null;
  }): Promise<boolean> {
    try {
      await this.obs.call(
        'SetSceneSceneTransitionOverride',
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        requestData as any
      );
      return true;
    } catch (e) {
      console.error('Error at : setSceneTransitionOverride');
      console.error(e);
      return false;
    }
  }
}

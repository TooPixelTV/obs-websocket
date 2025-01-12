import OBSWebSocket from 'obs-websocket-js';

import { ISceneItemsRequestsService } from '../interfaces/scene-items-requests-service.interface';
import { ObsSceneItem } from '../models';

export default class LocalSceneItemsRequestsService
  implements ISceneItemsRequestsService
{
  private obs: OBSWebSocket;

  constructor(obs: OBSWebSocket) {
    this.obs = obs;
  }

  public async getSceneItemList(requestData: {
    sceneName?: string;
    sceneUuid?: string;
  }): Promise<Array<ObsSceneItem> | null> {
    try {
      const result = await this.obs.call('GetSceneItemList', requestData);
      if (result) {
        return result.sceneItems as unknown as Array<ObsSceneItem>;
      } else {
        return null;
      }
    } catch (e) {
      return null;
    }
  }

  public async createSceneItem(requestData: {
    sceneName?: string;
    sceneUuid?: string;
    sourceName?: string;
    sourceUuid?: string;
    sceneItemEnabled?: boolean;
  }): Promise<{ sceneItemId: number } | null> {
    try {
      return await this.obs.call('CreateSceneItem', requestData);
    } catch (e) {
      return null;
    }
  }

  async removeSceneItem(requestData: {
    sceneName?: string;
    sceneUuid?: string;
    sceneItemId: number;
  }): Promise<boolean> {
    try {
      await this.obs.call('RemoveSceneItem', requestData);
      return true;
    } catch (e) {
      return false;
    }
  }

  public async setSceneItemEnabled(requestData: {
    sceneName?: string;
    sceneUuid?: string;
    sceneItemId: number;
    sceneItemEnabled: boolean;
  }): Promise<boolean> {
    try {
      await this.obs.call('SetSceneItemEnabled', requestData);
      return true;
    } catch (e) {
      return false;
    }
  }

  public async getSceneItemId(requestData: {
    sceneName?: string;
    sceneUuid?: string;
    sourceName: string;
    searchOffset?: number;
  }): Promise<{ sceneItemId: number } | null> {
    try {
      return await this.obs.call('GetSceneItemId', requestData);
    } catch (e) {
      return null;
    }
  }
}

import { ObsSceneItem } from '../models';

export interface ISceneItemsRequestsService {
  getSceneItemList(requestData: {
    sceneName?: string;
    sceneUuid?: string;
  }): Promise<Array<ObsSceneItem> | null>;
  createSceneItem(requestData: {
    sceneName?: string;
    sceneUuid?: string;
    sourceName?: string;
    sourceUuid?: string;
    sceneItemEnabled?: boolean;
  }): Promise<{ sceneItemId: number } | null>;
  removeSceneItem(requestData: {
    sceneName?: string;
    sceneUuid?: string;
    sceneItemId: number;
  }): Promise<boolean>;
  setSceneItemEnabled(requestData: {
    sceneName?: string;
    sceneUuid?: string;
    sceneItemId: number;
    sceneItemEnabled: boolean;
  }): Promise<boolean>;
  getSceneItemId(requestData: {
    sceneName?: string;
    sceneUuid?: string;
    sourceName: string;
    searchOffset?: number;
  }): Promise<{ sceneItemId: number } | null>;
}

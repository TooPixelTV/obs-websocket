import OBSWebSocket from 'obs-websocket-js';

import { IInputRequestsService } from '../interfaces';
import { ObsInput } from '../models';

export default class LocalInputRequestsService
  implements IInputRequestsService
{
  private obs: OBSWebSocket;

  constructor(obs: OBSWebSocket) {
    this.obs = obs;
  }

  async getInputList(requestData: {
    inputKind?: string;
  }): Promise<Array<ObsInput> | null> {
    try {
      return (await this.obs.call('GetInputList', requestData))
        .inputs as unknown as Array<ObsInput>;
    } catch (e) {
      return null;
    }
  }

  async getInputSettings(requestData: {
    inputName?: string;
    inputUuid?: string;
  }): Promise<{ inputSettings: unknown; inputKind: string } | null> {
    try {
      return await this.obs.call('GetInputSettings', requestData);
    } catch (e) {
      return null;
    }
  }

  async createInput(requestData: {
    sceneName?: string;
    sceneUuid?: string;
    inputName: string;
    inputKind: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    inputSettings?: any;
    sceneItemEnabled?: boolean;
  }): Promise<{ inputUuid: string; sceneItemId: number } | null> {
    try {
      return await this.obs.call('CreateInput', requestData);
    } catch (e) {
      return null;
    }
  }
}

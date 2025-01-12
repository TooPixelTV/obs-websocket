import OBSWebSocket from 'obs-websocket-js';

import { IConfigRequestsService } from '../interfaces/config-requests-service.interface';
import { ObsVideoSettings } from '../models/obs-video-settings.model';

export default class LocalConfigRequestsService
  implements IConfigRequestsService
{
  private obs: OBSWebSocket;

  constructor(obs: OBSWebSocket) {
    this.obs = obs;
  }

  public async getVideoSettings(): Promise<ObsVideoSettings | null> {
    try {
      return this.obs.call('GetVideoSettings');
    } catch (e) {
      return null;
    }
  }

  public async getProfileParameter(requestData: {
    parameterCategory: string;
    parameterName: string;
  }): Promise<{
    parameterValue: string;
    defaultParameterValue: string;
  } | null> {
    try {
      return this.obs.call('GetProfileParameter', requestData);
    } catch (e) {
      return null;
    }
  }

  public async getPersistentData(requestData: {
    realm: string;
    slotName: string;
  }): Promise<{
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    slotValue: any;
  } | null> {
    try {
      return this.obs.call('GetPersistentData', requestData);
    } catch (e) {
      return null;
    }
  }

  public async setPersistentData(requestData: {
    realm: string;
    slotName: string;
    slotValue: string;
  }): Promise<undefined> {
    try {
      return this.obs.call('SetPersistentData', requestData);
    } catch (e) {
      return undefined;
    }
  }
}

import OBSWebSocket from 'obs-websocket-js';

import { IGeneralRequestsService } from '../interfaces/general-requests-service.interface';
import { ObsVersion } from '../models/obs-version.model';

export default class LocalGeneralRequestsService
  implements IGeneralRequestsService
{
  private obs: OBSWebSocket;

  constructor(obs: OBSWebSocket) {
    this.obs = obs;
  }

  public async getVersion(): Promise<ObsVersion | null> {
    try {
      return this.obs.call('GetVersion');
    } catch (e) {
      return null;
    }
  }

  public async callVendorRequest(requestData: {
    vendorName: string;
    requestType: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    requestData?: any;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  }): Promise<any> {
    try {
      return this.obs.call('CallVendorRequest', requestData);
    } catch (e) {
      return null;
    }
  }
}

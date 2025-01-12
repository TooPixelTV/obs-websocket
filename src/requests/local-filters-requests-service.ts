import OBSWebSocket from 'obs-websocket-js';

import { IFiltersRequestsService } from '../interfaces/filters-requests-service.interface';
import { ObsFilter } from '../models';

export default class LocalFiltersRequestsService
  implements IFiltersRequestsService
{
  private obs: OBSWebSocket;

  constructor(obs: OBSWebSocket) {
    this.obs = obs;
  }

  public async getSourceFilterList(requestData: {
    sourceName?: string;
    sourceUuid?: string;
  }): Promise<Array<ObsFilter> | null> {
    try {
      const result = await this.obs.call('GetSourceFilterList', requestData);
      if (result) {
        return result.filters as unknown as Array<ObsFilter>;
      } else {
        return null;
      }
    } catch (e) {
      return null;
    }
  }

  public async createSourceFilter(requestData: {
    sourceName?: string;
    sourceUuid?: string;
    filterName: string;
    filterKind: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    filterSettings?: any;
  }): Promise<boolean> {
    try {
      await this.obs.call('CreateSourceFilter', requestData);
      return true;
    } catch (e) {
      return false;
    }
  }

  async removeSourceFilter(requestData: {
    sourceName?: string;
    sourceUuid?: string;
    filterName: string;
  }): Promise<boolean> {
    try {
      await this.obs.call('RemoveSourceFilter', requestData);
      return true;
    } catch (e) {
      return false;
    }
  }

  public async setSourceFilterEnabled(requestData: {
    sourceName?: string;
    sourceUuid?: string;
    filterName: string;
    filterEnabled: boolean;
  }): Promise<boolean> {
    try {
      await this.obs.call('SetSourceFilterEnabled', requestData);
      return true;
    } catch (e) {
      return false;
    }
  }
}

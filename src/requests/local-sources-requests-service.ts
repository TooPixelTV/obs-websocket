import OBSWebSocket from 'obs-websocket-js';

import { ISourcesRequestsService } from '../interfaces/sources-requests-service.interface';

export default class LocalSourcesRequestsService
  implements ISourcesRequestsService
{
  private obs: OBSWebSocket;

  constructor(obs: OBSWebSocket) {
    this.obs = obs;
  }

  public async getSourceScreenshot(requestData: {
    sourceName?: string;
    sourceUuid?: string;
    imageFormat: string;
    imageWidth?: number;
    imageHeight?: number;
    imageCompressionQuality?: number;
  }): Promise<string | null> {
    try {
      const result = await this.obs.call('GetSourceScreenshot', requestData);
      if (result) {
        return result.imageData;
      }
    } catch (e) {
      console.error('Error at : getSourceScreenshot');
      console.error(e);
    }
    return null;
  }
}

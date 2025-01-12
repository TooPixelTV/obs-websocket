import OBSWebSocket from 'obs-websocket-js';

import { IObsUtilsService } from './interfaces/obs-utils-service.interface';
import { LocalObsWebsocketService } from './local-obs-websocket-service';

export default class LocalObsUtilsService implements IObsUtilsService {
  private obs: OBSWebSocket;
  private obsWebsocketService: LocalObsWebsocketService;

  constructor(
    obs: OBSWebSocket,
    obsWebsocketService: LocalObsWebsocketService
  ) {
    this.obs = obs;
    this.obsWebsocketService = obsWebsocketService;
  }

  public async getStreamScreenshot(
    format = 'png'
  ): Promise<ArrayBuffer | null> {
    const version = await this.obsWebsocketService.general.getVersion();
    if (version?.supportedImageFormats.includes(format)) {
      const currentScene =
        await this.obsWebsocketService.scenes.getCurrentScene();

      if (currentScene) {
        const result =
          await this.obsWebsocketService.sources.getSourceScreenshot({
            sourceUuid: currentScene.sceneUuid,
            imageFormat: format,
            imageCompressionQuality: 50,
          });

        if (result) {
          return await fetch(result).then((res) => res.arrayBuffer());
        }

        return null;
      }
    }

    return null;
  }
}

import OBSWebSocket from 'obs-websocket-js';

import { IObsWebsocketService } from './interfaces';
import LocalObsUtilsService from './local-obs-utils-service';
import LocalConfigRequestsService from './requests/local-config-requests-service';
import LocalFiltersRequestsService from './requests/local-filters-requests-service';
import LocalGeneralRequestsService from './requests/local-general-requests-service';
import LocalInputRequestsService from './requests/local-input-requests-service';
import LocalSceneItemsRequestsService from './requests/local-scene-items-requests-service';
import LocalScenesRequestsService from './requests/local-scenes-requests-service';
import LocalSourcesRequestsService from './requests/local-sources-requests-service';

export class LocalObsWebsocketService implements IObsWebsocketService {
  private readonly RETRY_CONNECTION_DELAY = 5000;

  private ip: string;
  private port: number;
  private password: string;
  private obs: OBSWebSocket = new OBSWebSocket();

  private connecting = false;
  private connected = false;

  // Services
  public utils: LocalObsUtilsService = new LocalObsUtilsService(this.obs, this);
  public general: LocalGeneralRequestsService = new LocalGeneralRequestsService(
    this.obs
  );
  public scenes: LocalScenesRequestsService = new LocalScenesRequestsService(
    this.obs
  );
  public sources: LocalSourcesRequestsService = new LocalSourcesRequestsService(
    this.obs
  );
  public config: LocalConfigRequestsService = new LocalConfigRequestsService(
    this.obs
  );
  public sceneItems: LocalSceneItemsRequestsService =
    new LocalSceneItemsRequestsService(this.obs);
  public filters: LocalFiltersRequestsService = new LocalFiltersRequestsService(
    this.obs
  );
  public input: LocalInputRequestsService = new LocalInputRequestsService(
    this.obs
  );

  constructor(ip: string, port: number, password: string) {
    this.ip = ip;
    this.port = port;
    this.password = password;
  }

  public async connect() {
    if (this.connecting) {
      while (this.connecting) {
        await new Promise((resolve) => {
          setTimeout(resolve, 100);
        });
      }
      return;
    }

    this.connecting = true;

    try {
      await this.obs?.connect(`ws://${this.ip}:${this.port}`, this.password);
      this.obs.on('ConnectionClosed', () => {
        console.info('OBS : Connection lost !');
        this.connected = false;
        this.obs.removeAllListeners();
        this.connect();
      });

      console.info('OBS : Connected !');
      this.connected = true;
    } catch (e) {
      console.error('Failed to connect to OBS websocket !');
      this.connected = false;
      setTimeout(() => {
        this.connect();
      }, this.RETRY_CONNECTION_DELAY);
    }
    this.connecting = false;
  }

  public async disconnect() {
    if (!this.connected) {
      return;
    }

    await this.obs.disconnect();
    console.info('OBS : Disconnected');
  }

  public isConnected(): boolean {
    return this.connected;
  }
}

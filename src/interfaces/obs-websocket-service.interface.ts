import { IConfigRequestsService } from './config-requests-service.interface';
import { IFiltersRequestsService } from './filters-requests-service.interface';
import { IGeneralRequestsService } from './general-requests-service.interface';
import { ISceneItemsRequestsService } from './scene-items-requests-service.interface';
import { IScenesRequestsService } from './scenes-requests-service.interface';
import { ISourcesRequestsService } from './sources-requests-service.interface';

export interface IObsWebsocketService {
  scenes: IScenesRequestsService;
  config: IConfigRequestsService;
  filters: IFiltersRequestsService;
  general: IGeneralRequestsService;
  sceneItems: ISceneItemsRequestsService;
  sources: ISourcesRequestsService;
}

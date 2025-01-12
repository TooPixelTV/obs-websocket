import { ObsFilter } from '../models';

export interface IFiltersRequestsService {
  getSourceFilterList(requestData: {
    sourceName?: string;
    sourceUuid?: string;
  }): Promise<Array<ObsFilter> | null>;
  createSourceFilter(requestData: {
    sourceName?: string;
    sourceUuid?: string;
    filterName: string;
    filterKind: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    filterSettings?: any;
  }): Promise<boolean>;
  removeSourceFilter(requestData: {
    sourceName?: string;
    sourceUuid?: string;
    filterName: string;
  }): Promise<boolean>;
  setSourceFilterEnabled(requestData: {
    sourceName?: string;
    sourceUuid?: string;
    filterName: string;
    filterEnabled: boolean;
  }): Promise<boolean>;
}

import { ObsVideoSettings } from '../models';

export interface IConfigRequestsService {
  getVideoSettings(): Promise<ObsVideoSettings | null>;
  getProfileParameter(requestData: {
    parameterCategory: string;
    parameterName: string;
  }): Promise<{ parameterValue: string; defaultParameterValue: string } | null>;
  getPersistentData(requestData: { realm: string; slotName: string }): Promise<{
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    slotValue: any;
  } | null>;
  setPersistentData(requestData: {
    realm: string;
    slotName: string;
    slotValue: string;
  }): Promise<undefined>;
}

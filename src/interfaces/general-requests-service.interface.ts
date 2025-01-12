import { ObsVersion } from '../models';

export interface IGeneralRequestsService {
  getVersion(): Promise<ObsVersion | null>;
  callVendorRequest(requestData: {
    vendorName: string;
    requestType: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    requestData?: any;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  }): Promise<any>;
}

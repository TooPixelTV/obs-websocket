import { ObsInput } from '../models/obs-input.model';

export interface IInputRequestsService {
  getInputList(requestData: {
    inputKind?: string;
  }): Promise<Array<ObsInput> | null>;
  getInputSettings(requestData: {
    inputName?: string;
    inputUuid?: string;
  }): Promise<{ inputSettings: unknown; inputKind: string } | null>;
  createInput(requestData: {
    sceneName?: string;
    sceneUuid?: string;
    inputName: string;
    inputKind: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    inputSettings?: any;
    sceneItemEnabled?: boolean;
  }): Promise<{ inputUuid: string; sceneItemId: number } | null>;
}

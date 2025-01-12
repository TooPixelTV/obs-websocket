export interface IObsUtilsService {
  getStreamScreenshot(format: string): Promise<ArrayBuffer | null>;
}

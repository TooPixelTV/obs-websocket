export interface ObsVersion {
  obsVersion: string;
  obsWebSocketVersion: string;
  rpcVersion: number;
  availableRequests: Array<string>;
  supportedImageFormats: Array<string>;
  platform: string;
  platformDescription: string;
}

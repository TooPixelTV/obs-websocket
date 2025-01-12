export interface ISourcesRequestsService {
  getSourceScreenshot(requestData: {
    sourceName?: string;
    sourceUuid?: string;
    imageFormat: string;
    imageWidth?: number;
    imageHeight?: number;
    imageCompressionQuality?: number;
  }): Promise<string | null>;
}

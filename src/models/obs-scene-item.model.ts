export interface ObsSceneItem {
  inputKind: string;
  isGroup: boolean;
  sceneItemBlendMode: string;
  sceneItemEnabled: true;
  sceneItemId: number;
  sceneItemIndex: number;
  sceneItemLocked: boolean;
  sceneItemTransform: {
    alignment: number;
    boundsAlignment: number;
    boundsHeight: number;
    boundsType: string;
    boundsWidth: number;
    cropBottom: number;
    cropLeft: number;
    cropRight: number;
    cropToBounds: boolean;
    cropTop: number;
    height: number;
    positionX: number;
    positionY: number;
    rotation: number;
    scaleX: number;
    scaleY: number;
    sourceHeight: number;
    sourceWidth: number;
    width: number;
  };
  sourceName: string;
  sourceType: string;
  sourceUuid: string;
}

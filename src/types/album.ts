export type Album = {
  accessUrl: string;
  boardId: number | null;
  imageId: number | null;
  metaDateTime: string;
  resizeUrl: string;
  contentCheck: boolean;
  originName: string;
  activeIndex?: number;
  [key: string]: any;
};

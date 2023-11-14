export type Album = {
  accessUrl: string;
  boardId: number;
  imageId: number;
  metaDateTime: string;
  resizeUrl: string;
  contentCheck: boolean;
  originName: string;
  activeIndex?: number;
};

export type GuestAlbum = {
  id: number;
  name: string;
  previewUrl: string;
  file: File;
};

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

export type GuestFile = {
  id: number;
  name: string;
  previewUrl: string;
  file: File;
};

export type GuestAlbum = {
  images: GuestFile[] | null;
  message: string;
};

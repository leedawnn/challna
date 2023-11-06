import { Album } from './album';

export type message = {
  board_id: number;
  dateTime: string;
  content: string;
  boardImageViewDtoList: Pick<Album, 'accessUrl' | 'imageId' | 'metaDateTime' | 'originName'>[];
};

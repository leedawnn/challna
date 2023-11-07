import { Album } from './album';

export type Message = {
  board_id: number;
  dateTime: string;
  content: string;
  boardImageViewDtoList: Pick<Album, 'accessUrl' | 'imageId' | 'metaDateTime' | 'originName'>[];
};

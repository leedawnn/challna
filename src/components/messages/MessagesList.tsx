import { useQueryClient, useQuery, useInfiniteQuery } from '@tanstack/react-query';
import { AxiosError, AxiosResponse, Axios } from 'axios';
import { MAIN_MESSAGE_KEY } from './../../api/messages';
import { fetchQuery } from './../../../src/utils/fetchQuery';
import { message } from '.././../types/message';
import instance from '../../api/axios';
import { useAtomValue } from 'jotai';
import { userStore } from '../../stores/userStore';
import { HTTP_METHOD } from '../../constants/api';

export const getBaordList = (accessToken: string) => {
  return instance({
    url: `/board`,
    method: HTTP_METHOD.GET,
    headers: {
      'X-AUTH-TOKEN': accessToken,
    },
  });
};
export interface messagess {
  id?: any;
  dateTime?: string;
  content?: string;
}

export type Props = {
  data?: message[];
};

export const Messagelist = ({ data }: Props) => {
  return (
    <div>
      {data?.map((message: message) => (
        <div key={message.id}>
          <li>{message.content}</li>
          <li>{message.dateTime}</li>
        </div>
      ))}
    </div>
  );
};

export default Messagelist;

//   const { data } = useQuery(MAIN_MESSAGE_KEY, getMessageBaord)

// const albumDatas = queryClient.getQueryData<any>(MAIN_ALBUM_KEY);

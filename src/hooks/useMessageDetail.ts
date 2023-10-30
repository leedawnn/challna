// import { AxiosError, AxiosResponse } from 'axios';
import { useQuery } from '@tanstack/react-query';
import { getBoardImage } from '../api/messages/index';
// import { fetchQuery } from '../utils/fetchQuery';

export const useMessageDetail = (boardId: any, accessToken: string) => {
  return useQuery([boardId], () => getBoardImage(accessToken, boardId));
};

export default useMessageDetail;

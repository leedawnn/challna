import { useQueryClient, useQuery } from '@tanstack/react-query';
import { MAIN_MESSAGE_KEY, MAIN_ALBUM_KEY, getBaordList } from './../../api/messages';
import axios from 'axios';

export type message = {
  id: any;
  dateTime: string;
  content: string;
};

export type Props = {
  data: message[];
};

export const Messagelist = () => {
  const queryClient = useQueryClient();

  const fetchPosts = async () => await axios.get(`https://momentpic.store/board`).then((res) => res.data);
  const { data } = useQuery(['fetchPosts'], fetchPosts);
  console.log(data);
  //   {
  //     data?.map((message: message, index: number) => <div key={message.id || index}>{message.content}</div>);
  //   }
};

export default Messagelist;

//   const { data } = useQuery(MAIN_MESSAGE_KEY, getMessageBaord)

// const albumDatas = queryClient.getQueryData<any>(MAIN_ALBUM_KEY);

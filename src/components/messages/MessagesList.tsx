import { useQueryClient, useQuery, useInfiniteQuery } from '@tanstack/react-query';
import { AxiosError, AxiosResponse, Axios } from 'axios';
import { MAIN_MESSAGE_KEY, getBoardList } from './../../api/messages';
import { fetchQuery } from './../../../src/utils/fetchQuery';
import { message, messageFront } from '.././../types/message';
import instance from '../../api/axios';
import { useAtomValue } from 'jotai';
import { userStore } from '../../stores/userStore';
import { HTTP_METHOD } from '../../constants/api';
import { useMessageLists } from '../../hooks/useMessageList';
import { MessageContainer, Content, DateTime } from './Message.styled';

export type Props = {
  data: message[];
};

export const Messagelist = ({ data }: Props) => {
  const users = useAtomValue(userStore);
  const { data: message } = useMessageLists(users?.accessToken as string);
  return (
    <article>
      {data &&
        data.map((data) => {
          const message: message = {
            board_id: data.board_id,
            dateTime: data.dateTime,
            content: data.content,
          };

          return (
            <MessageContainer key={message.board_id}>
              <Content>{message.content}</Content>
              <DateTime>{message.dateTime}</DateTime>
            </MessageContainer>
          );
        })}
    </article>
  );
};

// export const Messagelist = ({ data }: Props) => {
//   // const users = useAtomValue(userStore);
//   // const { data: message, isLoading } = useMessageLists(users?.accessToken as string);
//   // if (isLoading) return <div>loading</div>;
//   return (
//     <div>
//       {data &&
//         data?.map((message: message) => (
//           <div>
//             {/* <li>{message?.pages}</li> */}
//             <li>{message.pages.content}</li>
//             <li>{message.pages.dateTime}</li>
//           </div>
//         ))}
//       jammanbo
//     </div>
//   );
// };
export default Messagelist;

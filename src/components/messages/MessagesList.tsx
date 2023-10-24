import { useQueryClient, useQuery, useInfiniteQuery } from '@tanstack/react-query';
import { AxiosError, AxiosResponse, Axios } from 'axios';
import { useAtomValue } from 'jotai';
import { MAIN_MESSAGE_KEY, getBoardList } from '../../api/messages';
import { fetchQuery } from '../../utils/fetchQuery';
import { message, messageFront, ListProps } from '../../types/message';
import instance from '../../api/axios';
import { userStore } from '../../stores/userStore';
import { HTTP_METHOD } from '../../constants/api';
import { useMessageLists } from '../../hooks/useMessageList';
import { MessageContainer, Content, DateTime, ContentWrapper } from './Message.styled';
import { RightIcon } from '../../assets/icons/RightIcon';
import { Eclipse } from '../../assets/icons/Eclipse';

export type Props = {
  data: message[];
};

export const Messagelist = ({ data }: ListProps) => {
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
            // <MessageContainer key={message.board_id}>
            //   <Content>{message.content}</Content>
            //   <DateTime>{message.dateTime}</DateTime>
            // </MessageContainer>
            <MessageContainer key={message.board_id}>
              <ContentWrapper>
                <Content>
                  <Eclipse />
                </Content>
                <Content>{message.content}</Content>
                <Content>
                  <RightIcon />
                </Content>
              </ContentWrapper>
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

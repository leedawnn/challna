import Messagelist from '../../components/messages/MessagesList';
import { MAIN_MESSAGE_KEY, getBoardList } from './../../api/messages';
import instance from '../../api/axios';
import { useAtomValue } from 'jotai';
import { useQuery } from '@tanstack/react-query';
import { userStore } from '../../stores/userStore';
import { HTTP_METHOD } from '../../constants/api';
import { useMessageLists } from '../../hooks/useMessageList';
import { message } from '../../types/message';

const Messages = () => {
  const users = useAtomValue(userStore);
  const { data: message, isLoading } = useMessageLists(users?.accessToken as string);
  if (isLoading) return <div>loading</div>;
  // const d = message?.pages.map((content) => content);
  // console.log(message?.pages.map((item) => item));
  // console.log(message?.pages.map(content));
  // console.log(message?.pages.map(content));
  // return (
  // <div>
  //   <div>jammanno</div>
  // </div>
  // <>
  //   {/* {JSON.stringify({ message })} */}
  //   {/* <Messagelist data={message} /> */}
  // <Messagelist data={[]} />
  // </>
  // );
  return (
    <article>
      {message &&
        message.pages.map((data: any) => {
          const message: message = {
            board_id: data.board_id,
            dateTime: data.dateTime,
            content: data.content,
          };

          return (
            <div key={message.board_id}>
              <li>{message.content}</li>
              <li>{message.dateTime}</li>
            </div>
          );
        })}
    </article>
  );
};

export default Messages;

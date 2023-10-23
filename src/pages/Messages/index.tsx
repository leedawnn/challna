import Messagelist from '../../components/messages/MessagesList';
import { MAIN_MESSAGE_KEY, getBoardList } from './../../api/messages';
import instance from '../../api/axios';
import { useAtomValue } from 'jotai';
import { useQuery } from '@tanstack/react-query';
import { userStore } from '../../stores/userStore';
import { HTTP_METHOD } from '../../constants/api';
import { Props } from '../../components/messages/MessagesList';
import { useMessageLists } from '../../hooks/useMessageList';
import { message } from '../../types/message';

const Messages = () => {
  const users = useAtomValue(userStore);
  const { data: message, isLoading } = useMessageLists(users?.accessToken as string);
  if (isLoading) return <div>loading</div>;
  console.log(message);
  return (
    <div>jammanbo!!</div>
    // <>
    //   {/* {message?.map((data:message) => (
    //     <div key={data.content}>
    //       <li>{data.dateTime}</li>
    //       <li>{data.id}</li>
    //     </div>
    //   ))} */}
    //   {/* <Messagelist data={message} /> */}
    //   {/* <Messagelist /> */}
    // </>
  );
};

export default Messages;

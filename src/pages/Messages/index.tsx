import { useAtomValue } from 'jotai';
import Messagelist from '../../components/messages/MessagesList';
import { userStore } from '../../stores/userStore';
import { useMessageLists } from '../../hooks/useMessageList';

const Messages = () => {
  const users = useAtomValue(userStore);
  const { data: message, isLoading } = useMessageLists(users?.accessToken as string);
  if (isLoading) return <div>loading</div>;
  return <Messagelist data={message?.pages as any[]} />;
};

export default Messages;

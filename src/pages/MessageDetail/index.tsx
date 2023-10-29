import { useAtomValue } from 'jotai';
import MessageDetail from '../../components/messages/MessageDetail';
import { userStore } from '../../stores/userStore';
import { useMessageLists } from '../../hooks/useMessageList';

const MessageDetailPage = () => {
  const users = useAtomValue(userStore);
  useMessageLists(users?.accessToken as string);

  return <MessageDetail />;
};

export default MessageDetailPage;

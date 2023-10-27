import { useAtomValue } from 'jotai';
import MessageDetail from '../../components/messages/MessageDetail';
import { userStore } from '../../stores/userStore';
import { useMessageLists } from '../../hooks/useMessageList';

const MessageDetailPage = () => {
  const users = useAtomValue(userStore);
  const { data: message } = useMessageLists(users?.accessToken as string);

  return <MessageDetail contentList={message?.pages as any[]} boardImageViewDtoList={message?.pages as any[]} />;
};

export default MessageDetailPage;

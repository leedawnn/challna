import { useAtomValue } from 'jotai';
import Messagelist from '../../components/messages/MessagesList';
import { userStore } from '../../stores/userStore';
import { useMessageLists } from '../../hooks/useMessageList';
import useInfinityObserver from '../../hooks/useInfinityObserver';

const Messages = () => {
  const users = useAtomValue(userStore);
  const { data: messageData, fetchNextPage, hasNextPage } = useMessageLists(users?.accessToken as string);
  const { setTarget } = useInfinityObserver({
    hasNextPage,
    fetchNextPage,
  });
  return (
    <>
      <Messagelist contentList={messageData?.pages as any[]} />
      <div ref={setTarget} />
    </>
  );
};

export default Messages;

import { useAtomValue } from 'jotai';
import Messagelist from '../../components/messages/MessagesList';
import { userStore } from '../../stores/userStore';
import { useMessageLists } from '../../hooks/useMessageList';
import useInfinityObserver from '../../hooks/useInfinityObserver';

const Messages = () => {
  const users = useAtomValue(userStore);
  const { data: message, isLoading, fetchNextPage, hasNextPage } = useMessageLists(users?.accessToken as string);
  const { setTarget } = useInfinityObserver({
    hasNextPage,
    fetchNextPage,
  });
  if (isLoading) return <div>loading</div>;
  return (
    <>
      <div ref={setTarget} />
      <Messagelist data={message?.pages as any[]} />;
    </>
  );
};

export default Messages;

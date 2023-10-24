import Messagelist from '../../components/messages/MessagesList';
import { MAIN_MESSAGE_KEY, getBoardList } from './../../api/messages';
import instance from '../../api/axios';
import { useAtomValue } from 'jotai';
import { useQuery } from '@tanstack/react-query';
import { userStore } from '../../stores/userStore';
import { HTTP_METHOD } from '../../constants/api';
import { useMessageLists } from '../../hooks/useMessageList';
import { message, messageFront, ListProps } from '../../types/message';
import { MessageContainer, Content, DateTime, ContentWrapper } from '../../components/messages/Message.styled';
import { RightIcon } from '../../assets/icons/RightIcon';
import { Eclipse } from '../../assets/icons/Eclipse';
const Messages = () => {
  const users = useAtomValue(userStore);
  const { data: message, isLoading } = useMessageLists(users?.accessToken as string);
  if (isLoading) return <div>loading</div>;
  return <Messagelist data={message?.pages as any[]} />;
};

export default Messages;

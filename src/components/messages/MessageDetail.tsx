import { useAtomValue } from 'jotai';
import { useQuery } from '@tanstack/react-query';
import { userStore } from '../../stores/userStore';
import { HTTP_METHOD } from '../../constants/api';
// import { Props } from './MessagesList';
import { useMessageLists } from '../../hooks/useMessageList';
import { message, messageFront } from '../../types/message';

const MessageDetail = () => {
  return (
    <>
      <div>메세지상세 페이지!</div>
    </>
  );
};

export default MessageDetail;

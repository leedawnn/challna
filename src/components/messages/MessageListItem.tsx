import { useAtomValue } from 'jotai';
import { useQuery } from '@tanstack/react-query';
import { userStore } from '../../stores/userStore';
import { HTTP_METHOD } from '../../constants/api';
// import { Props } from './MessagesList';
import { useMessageLists } from '../../hooks/useMessageList';
import { message, messageFront } from '.././../types/message';

export type Props = {
  data: message[];
};

const MessageListItem = ({ data }: Props) => {
  <div>hello</div>;
};

export default MessageListItem;

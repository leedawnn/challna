import * as S from './Message.styled';

import Eclipse from '../../assets/icons/Eclipse';
import { ROUTES_PATH } from '../../constants/routes';
import RightIcon from '../../assets/icons/RightIcon';
import type { message } from '../../types/message';

type Props = {
  messageLists: message[];
};

const MessageList = ({ messageLists }: Props) => {
  return (
    <S.Layout>
      <S.Container>
        {messageLists.map((message) => (
          <S.MessageListWrapper key={message.board_id}>
            <S.MessageDetailLink to={`${ROUTES_PATH.messageDetail}/${message.board_id}`}>
              <Eclipse style={{ paddingTop: '4px' }} />
              <S.MessageBox>
                <S.MessageText> {message.content} </S.MessageText>
                <S.MessageDateText> {message.dateTime} </S.MessageDateText>
              </S.MessageBox>
              <RightIcon $type="message" />
            </S.MessageDetailLink>
          </S.MessageListWrapper>
        ))}
      </S.Container>
    </S.Layout>
  );
};

export default MessageList;

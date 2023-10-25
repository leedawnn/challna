import { useAtomValue } from 'jotai';
import { message, ListProps } from '../../types/message';
import { userStore } from '../../stores/userStore';
import { useMessageLists } from '../../hooks/useMessageList';
import { MessageContainer, Content, DateTime, ContentWrapper } from './Message.styled';
import { RightIcon } from '../../assets/icons/RightIcon';
import { Eclipse } from '../../assets/icons/Eclipse';
import { Link } from 'react-router-dom';
import { ROUTES_PATH } from '../../constants/routes';

export type Props = {
  data: message[];
};

export const Messagelist = ({ data }: ListProps) => {
  const users = useAtomValue(userStore);
  const { data: message } = useMessageLists(users?.accessToken as string);
  return (
    <article>
      {data &&
        data.map((data) => {
          const message: message = {
            board_id: data.board_id,
            dateTime: data.dateTime,
            content: data.content,
          };

          return (
            <MessageContainer key={message.board_id}>
              <Link to={ROUTES_PATH.messageDetail}>
                <ContentWrapper>
                  <Content>
                    <Eclipse />
                  </Content>
                  <Content>{message.content}</Content>
                  <Content>
                    <RightIcon />
                  </Content>
                </ContentWrapper>
                <DateTime>{message.dateTime}</DateTime>
              </Link>
            </MessageContainer>
          );
        })}
    </article>
  );
};

export default Messagelist;
